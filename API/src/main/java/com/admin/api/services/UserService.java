package com.admin.api.services;

import java.util.Collections;
import java.util.List;

import java.util.UUID;
import java.util.Optional;

import java.sql.Timestamp;

import com.admin.api.models.user.User;
import com.admin.api.models.user.UserInput;
import com.admin.api.repositories.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class UserService implements UserDetailsService {
  @Autowired
  private UserRepository repository;

  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = repository.findByUsername(username);

    if (user == null) {
      throw new UsernameNotFoundException(username);
    }

    return new org.springframework.security.core.userdetails.User(
      user.getUsername(),
      user.getPassword(),
      Collections.emptyList()
    );
  }
  public List<User> findAll() {
    return (List<User>) repository.findAll();
  }

  public Optional<User> findById(UUID id) {
    return repository.findById(id);
  }

  public User findByUsername(String username) {
    return repository.findByUsername(username);
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
    
    return repository.save(user);
  }
}
