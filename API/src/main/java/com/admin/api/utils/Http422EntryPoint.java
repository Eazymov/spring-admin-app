package com.admin.api.utils;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

@Component
public class Http422EntryPoint implements AuthenticationEntryPoint {
  @Override
  public void commence(
    HttpServletRequest request,
    HttpServletResponse response,
    AuthenticationException arg2
  ) throws IOException {
    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Access Denied");
  }
}
