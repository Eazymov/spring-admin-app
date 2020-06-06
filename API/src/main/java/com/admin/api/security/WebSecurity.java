package com.admin.api.security;

import java.util.List;
import java.util.Arrays;

import com.admin.api.services.UserDetailsService;
import com.admin.api.constants.SecurityConstants;

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
  private BCryptPasswordEncoder cryptEncoder;
  private UserDetailsService userDetailsService;

  public WebSecurity(
    UserDetailsService userDetailsService,
    BCryptPasswordEncoder cryptEncoder
  ) {
    this.cryptEncoder = cryptEncoder;
    this.userDetailsService = userDetailsService;
  }

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    AuthenticationManager authenticationManager = this.authenticationManager();
    JWTAuthenticationFilter authenticationFilter = new JWTAuthenticationFilter(authenticationManager);
    JWTAuthorizationFilter authorizationFilter = new JWTAuthorizationFilter(authenticationManager);

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
      .userDetailsService(this.userDetailsService)
      .passwordEncoder(this.cryptEncoder);
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    List<String> allowedHeaders = Arrays.asList("*");
    CorsConfiguration config = new CorsConfiguration();
    List<String> allowedOrigins = Arrays.asList("http://localhost:3000");
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

    config.setAllowCredentials(true);
    config.setAllowedMethods(allowedHeaders);
    config.setAllowedOrigins(allowedOrigins);
    source.registerCorsConfiguration("/**", config);

    return source;
  }
}
