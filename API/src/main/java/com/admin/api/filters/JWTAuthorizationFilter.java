package com.admin.api.filters;

import java.io.IOException;

import java.util.ArrayList;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.admin.api.constants.SecurityConstants;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.http.HttpHeaders;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
  private ObjectMapper objectMapper = new ObjectMapper();
  private Algorithm algorithm = Algorithm.HMAC512(SecurityConstants.SECRET.getBytes());

  public JWTAuthorizationFilter(AuthenticationManager authManager) {
    super(authManager);
  }

  private String getToken(HttpServletRequest request) {
    String header = request.getHeader(HttpHeaders.AUTHORIZATION);

    if (header == null) {
      return null;
    }

    if (header.startsWith(SecurityConstants.TOKEN_PREFIX)) {
      return header.replace(SecurityConstants.TOKEN_PREFIX, "");
    }

    return null;
  }

  private void sendError(HttpServletResponse servletResponse) {
    servletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
  }

  @Override
  protected void doFilterInternal(
    HttpServletRequest request,
    HttpServletResponse response,
    FilterChain chain
  ) throws IOException, ServletException {
    String token = getToken(request);

    if (token == null) {
      chain.doFilter(request, response);

      return;
    }

    UsernamePasswordAuthenticationToken auth = getAuthentication(token);

    if (auth == null) {
      sendError(response);

      return;
    }

    SecurityContextHolder.getContext().setAuthentication(auth);
    chain.doFilter(request, response);
  }

  private UsernamePasswordAuthenticationToken getAuthentication(String token) {
    String user = JWT.require(algorithm).build().verify(token).getSubject();

    if (user == null) {
      return null;
    }

    return new UsernamePasswordAuthenticationToken(user, null, new ArrayList());
  }
}
