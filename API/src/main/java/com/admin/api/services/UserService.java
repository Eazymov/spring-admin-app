package com.admin.api.services;

import java.util.List;

import java.sql.Timestamp;

import java.lang.NullPointerException;

import com.admin.api.models.User;
import com.admin.api.models.UserInput;
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

  public User save(UserInput userInput) {
    Timestamp timeStamp = new Timestamp(System.currentTimeMillis());
    User createdBy = this.repository.findById(userInput.getId()).orElseThrow(NullPointerException::new);

    User user = new User(
      userInput.getId(),
      userInput.getFirstName(),
      userInput.getLastName(),
      userInput.getPatronymic(),
      userInput.getUserName(),
      userInput.getEmail(),
      userInput.getPassword(),
      userInput.getRole(),
      timeStamp,
      timeStamp,
      createdBy,
      createdBy
    );
    
    return (User) this.repository.save(user);
  }
}
