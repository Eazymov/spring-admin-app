package com.admin.api.security;

import java.io.IOException;

import java.util.Date;
import java.util.ArrayList;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import com.admin.api.models.UserInput;
import com.admin.api.constants.SecurityConstants;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
  private final AuthenticationManager authenticationManager;

  public JWTAuthenticationFilter(AuthenticationManager authenticationManager) {
    this.authenticationManager = authenticationManager;
  }

  @Override
  public Authentication attemptAuthentication(
    HttpServletRequest request,
    HttpServletResponse response
  ) throws AuthenticationException {
    try {
      UserInput user = new ObjectMapper().readValue(request.getInputStream(), UserInput.class);
      UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
        user.getUsername(),
        user.getPassword()
      );

      return this.authenticationManager.authenticate(token);
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  @Override
  protected void successfulAuthentication(
    HttpServletRequest request,
    HttpServletResponse response,
    FilterChain chain,
    Authentication auth
  ) throws IOException, ServletException {
    String userName = ((User) auth.getPrincipal()).getUsername();
    Date expiresAt = new Date(System.currentTimeMillis() + SecurityConstants.EXPIRATION_TIME);
    Algorithm algorithm = Algorithm.HMAC512(SecurityConstants.SECRET.getBytes());
    String token = JWT.create()
      .withSubject(userName)
      .withExpiresAt(expiresAt)
      .sign(algorithm);

    response.addHeader(
      SecurityConstants.HEADER_STRING,
  SecurityConstants.TOKEN_PREFIX + token
    );
  }
}