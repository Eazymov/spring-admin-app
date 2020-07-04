package com.admin.api.controllers;

import java.util.List;
import java.util.UUID;
import java.util.Optional;

import com.admin.api.constants.SecurityConstants;
import com.admin.api.models.user.User;
import com.admin.api.services.UserService;
import com.admin.api.models.user.UserInput;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
public class UserController {
  @Autowired
  private UserService service;

  @Autowired
  private BCryptPasswordEncoder cryptEncoder;

  @PostMapping("/sign-up")
  public ResponseEntity<User> signUp(@RequestBody UserInput user) {
    String encodedPassword = cryptEncoder.encode(user.getPassword());

    user.setPassword(encodedPassword);

    return createUser(user);
  }

  @GetMapping("/users")
  public ResponseEntity<List<User>> getUsers() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/users/{id}")
  public ResponseEntity<Optional<User>> getUserById(@PathVariable("id") UUID id) {
    return ResponseEntity.ok(service.findById(id));
  }

  @GetMapping("/users/current")
  public ResponseEntity<User> getCurrent() {
    User currentUser = service.findCurrent();

    if (currentUser == null) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    return ResponseEntity.ok(service.findCurrent());
  }

  @PutMapping("/users")
  public ResponseEntity<User> updateUser(@RequestBody UserInput userInput) {
    UUID id = userInput.getId();
    Optional<User> user = service.findById(id);
    User currentUser = service.findCurrent();

    if (!user.isPresent()) {
      return ResponseEntity.notFound().build();
    }

    User updatedUser = service.update(userInput);

    if (currentUser == null) {
      return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    if (currentUser.getId() != updatedUser.getId()) {
      return ResponseEntity.ok(updatedUser);
    }

    HttpHeaders headers = new HttpHeaders();
    String username = updatedUser.getUsername();
    String password = updatedUser.getPassword();
    Algorithm algorithm = Algorithm.HMAC512(SecurityConstants.SECRET.getBytes());
    UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
      username,
      password
    );
    String token = JWT.create().withSubject(username).sign(algorithm);

    headers.set(SecurityConstants.TOKEN_HEADER, token);
    headers.set(HttpHeaders.ACCESS_CONTROL_EXPOSE_HEADERS, SecurityConstants.TOKEN_HEADER);
    SecurityContextHolder.getContext().setAuthentication(authentication);

    ResponseEntity<User> response = ResponseEntity.ok().headers(headers).body(updatedUser);

    return response;
  }

  @PostMapping("/users")
  public ResponseEntity<User> createUser(@RequestBody UserInput userInput) {
    String username = userInput.getUsername();
    User existedUser = service.findByUsername(username);

    if (existedUser == null) {
      return ResponseEntity.ok(service.create(userInput));
    }

    return ResponseEntity.unprocessableEntity().build();
  }
}
