package com.admin.api;

import java.util.List;

import com.admin.api.User;
import com.admin.api.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {
  @Autowired
  private UserRepository repository;

  public List<User> findAll() {
    return (List<User>) repository.findAll();
  }
}
