package com.admin.api;

import java.util.List;
import java.util.Arrays;

import com.admin.api.services.UserService;
import com.admin.api.utils.Http422EntryPoint;
import com.admin.api.constants.SecurityConstants;
import com.admin.api.filters.JWTAuthorizationFilter;
import com.admin.api.filters.JWTAuthenticationFilter;

import org.springframework.http.HttpMethod;
import org.springframework.context.annotation.Bean;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;

@EnableWebSecurity
public class WebSecurity extends WebSecurityConfigurerAdapter {
  private UserService userService;
  private BCryptPasswordEncoder cryptEncoder;
  private Http422EntryPoint authenticationEntryPoint = new Http422EntryPoint();

  public WebSecurity(
    UserService userService,
    BCryptPasswordEncoder cryptEncoder
  ) {
    this.userService = userService;
    this.cryptEncoder = cryptEncoder;
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    AuthenticationManager authenticationManager = authenticationManager();
    JWTAuthorizationFilter authorizationFilter = new JWTAuthorizationFilter(authenticationManager);
    JWTAuthenticationFilter authenticationFilter = new JWTAuthenticationFilter(authenticationManager);

    http
      .exceptionHandling()
      .authenticationEntryPoint(authenticationEntryPoint);
    http
      .cors().and().csrf().disable()
      .authorizeRequests()
      .antMatchers(SecurityConstants.SIGN_UP_URL).permitAll()
      .anyRequest()
      .authenticated()
      .and()
      .addFilter(authenticationFilter)
      .addFilter(authorizationFilter)
      .sessionManagement()
      .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
  }

  @Override
  public void configure(AuthenticationManagerBuilder auth) throws Exception {
    auth
      .userDetailsService(userService)
      .passwordEncoder(cryptEncoder);
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    CorsConfiguration config = new CorsConfiguration().applyPermitDefaultValues();
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    List<String> allowedMethods = Arrays.asList(
      HttpMethod.GET.name(),
      HttpMethod.PUT.name(),
      HttpMethod.POST.name()
    );

    config.setAllowCredentials(true);
    config.setAllowedMethods(allowedMethods);
    source.registerCorsConfiguration("/**", config);

    return source;
  }
}
