package com.admin.api.services;

import java.util.List;

import com.admin.api.models.User;
import com.admin.api.repositories.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

@Service
public class UserService {
  @Autowired
  private UserRepository repository;

  public List<User> findAll() {
    return (List<User>) this.repository.findAll();
  }
}
