package com.admin.api.controllers;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import com.admin.api.models.user.User;
import com.admin.api.services.UserService;
import com.admin.api.models.user.UserInput;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RestController
public class UserController {
  @Autowired
  private UserService service;

  @Autowired
  private BCryptPasswordEncoder cryptEncoder;

  @PostMapping("/sign-up")
  public User signUp(@RequestBody UserInput user) {
    String encodedPassword = cryptEncoder.encode(user.getPassword());

    user.setPassword(encodedPassword);

    return createUser(user);
  }

  @GetMapping("/users")
  public List<User> getUsers() {
    return service.findAll();
  }

  @GetMapping("/users/{id}")
  public Optional<User> getUserById(@PathVariable("id") UUID id) {
    return service.findById(id);
  }

  @GetMapping("/users/current")
  public User getUserById() {
    String username = (String) SecurityContextHolder
      .getContext()
      .getAuthentication()
      .getPrincipal();

    return service.findByUsername(username);
  }

  @PostMapping("/users")
  public User createUser(@RequestBody UserInput user) {
    return service.save(user);
  }
}
