package com.admin.api.services;

import java.util.List;

import java.sql.Timestamp;

import com.admin.api.models.user.User;
import com.admin.api.models.user.UserInput;
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

    User user = new User(
      userInput.getId(),
      userInput.getFirstName(),
      userInput.getLastName(),
      userInput.getPatronymic(),
      userInput.getUsername(),
      userInput.getEmail(),
      userInput.getPassword(),
      userInput.getRole(),
      timeStamp,
      timeStamp,
      null,
      null
    );
    
    return (User) this.repository.save(user);
  }
}
