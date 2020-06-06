package com.admin.api.controllers;

import java.util.List;

import com.admin.api.models.user.User;
import com.admin.api.services.UserService;
import com.admin.api.models.user.UserInput;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
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
    String encodedPassword = this.cryptEncoder.encode(user.getPassword());

    user.setPassword(encodedPassword);

    return this.createUser(user);
  }

  @GetMapping("/users")
  public List<User> getUsers() {
    return this.service.findAll();
  }

  @PostMapping("/users")
  public User createUser(@RequestBody UserInput user) {
    return this.service.save(user);
  }
}
