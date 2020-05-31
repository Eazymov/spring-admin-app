package com.admin.api.security;

import java.io.IOException;

import java.util.ArrayList;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.admin.api.constants.SecurityConstants;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {
  public JWTAuthorizationFilter(AuthenticationManager authManager) {
    super(authManager);
  }

  @Override
  protected void doFilterInternal(
    HttpServletRequest request,
    HttpServletResponse response,
    FilterChain chain
  ) throws IOException, ServletException {
    String header = request.getHeader(SecurityConstants.HEADER_STRING);

    if (header == null || !header.startsWith(SecurityConstants.TOKEN_PREFIX)) {
      chain.doFilter(request, response);

      return;
    }

    UsernamePasswordAuthenticationToken authentication = this.getAuthentication(request);

    SecurityContextHolder.getContext().setAuthentication(authentication);
    chain.doFilter(request, response);
  }

  private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
    String token = request.getHeader(SecurityConstants.HEADER_STRING);

    if (token != null) {
      token = token.replace(SecurityConstants.TOKEN_PREFIX, "");
      Algorithm algorithm = Algorithm.HMAC512(SecurityConstants.SECRET.getBytes());
      String user = JWT.require(algorithm).build().verify(token).getSubject();

      if (user != null) {
        return new UsernamePasswordAuthenticationToken(user, null, new ArrayList<>());
      }

      return null;
    }

    return null;
  }
}