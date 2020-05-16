package com.admin.api.controllers;

import java.util.List;

import com.admin.api.models.User;
import com.admin.api.services.UserService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class UserController {
  @Autowired
  private UserService service;

  @GetMapping("/users")
  public List<User> users() {
    return this.service.findAll();
  }
}
