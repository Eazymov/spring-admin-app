package com.admin.api;

import org.springframework.core.annotation.Order;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.ServletException;
import javax.servlet.FilterConfig;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;

@WebFilter
public class CORSFilter implements Filter {
  private final List<String> allowedOrigins = Arrays.asList("http://localhost:3000");

  public void destroy() {}

  @Override
  public void doFilter(
    ServletRequest req,
    ServletResponse res,
    FilterChain chain
  ) throws IOException, ServletException {
    if (req instanceof HttpServletRequest && res instanceof HttpServletResponse) {
      HttpServletRequest request = (HttpServletRequest) req;
      HttpServletResponse response = (HttpServletResponse) res;

      String origin = request.getHeader("Origin");

      response.setHeader("Access-Control-Allow-Origin", allowedOrigins.contains(origin) ? origin : "");
      response.setHeader("Vary", "Origin");
      response.setHeader("Access-Control-Max-Age", "3600");
      response.setHeader("Access-Control-Allow-Credentials", "true");
      response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
      response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, " + "X-CSRF-TOKEN");
    }

    chain.doFilter(req, res);
  }

  public void init(FilterConfig filterConfig) {}
}
