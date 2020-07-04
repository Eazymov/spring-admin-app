package com.admin.api.services;

import java.sql.Timestamp;

import java.util.List;
import java.util.UUID;
import java.util.Optional;
import java.util.Collections;

import com.admin.api.models.user.User;
import com.admin.api.models.user.UserInput;
import com.admin.api.repositories.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

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

  public User findCurrent() {
    String username = (String) SecurityContextHolder
      .getContext()
      .getAuthentication()
      .getPrincipal();

    return this.findByUsername(username);
  }

  public User findByUsername(String username) {
    return repository.findByUsername(username);
  }

  public User update(UserInput userInput) {
    UUID id = userInput.getId();
    User currentUser = findCurrent();
    User user = findById(id).orElseThrow();
    Timestamp timeStamp = new Timestamp(System.currentTimeMillis());

    user.setUsername(userInput.getUsername());
    user.setPassword(userInput.getPassword());
    user.setFirstName(userInput.getFirstName());
    user.setLastName(userInput.getLastName());
    user.setPatronymic(userInput.getPatronymic());
    user.setEmail(userInput.getEmail());
    user.setRole(userInput.getRole());
    user.setUpdatedOn(timeStamp);
    user.setUpdatedBy(currentUser);

    return repository.save(user);
  }

  public User create(UserInput userInput) {
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
