package com.admin.api.models;

import java.util.UUID;

import com.admin.api.enums.UserRole;

public class UserInput {
  private UUID id;

  private String firstName;

  private String lastName;

  private String patronymic;

  private String username;

  private String email;

  private String password;

  private UserRole role;

  public UserInput() {}

  public UserInput(
    UUID id,
    String firstName,
    String lastName,
    String patronymic,
    String username,
    String email,
    String password,
    UserRole role
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
  }

  public UUID getId() {
    return this.id;
  }

  public String getFirstName() {
    return this.firstName;
  }

  public String getLastName() {
    return this.lastName;
  }

  public String getPatronymic() {
    return this.patronymic;
  }

  public String getUsername() {
    return this.username;
  }

  public String getEmail() {
    return this.email;
  }

  public String getPassword() {
    return this.password;
  }

  public String setPassword(String password) {
    return this.password = password;
  }

  public UserRole getRole() {
    return this.role;
  }
}
