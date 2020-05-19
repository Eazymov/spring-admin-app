package com.admin.api.controllers;

import java.util.List;

import com.admin.api.models.User;
import com.admin.api.models.UserInput;
import com.admin.api.services.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class UserController {
  @Autowired
  private UserService service;

  @GetMapping("/users")
  public List<User> getUsers() {
    return this.service.findAll();
  }

  @PostMapping("/users")
  public User createUser(@RequestBody UserInput user) {
    return this.service.save(user);
  }
}
