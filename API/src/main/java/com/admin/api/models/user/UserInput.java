package com.admin.api.models.user;

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
    return id;
  }

  public String getFirstName() {
    return firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public String getPatronymic() {
    return patronymic;
  }

  public String getUsername() {
    return username;
  }

  public String getEmail() {
    return email;
  }

  public String getPassword() {
    return password;
  }

  public String setPassword(String password) {
    return this.password = password;
  }

  public UserRole getRole() {
    return role;
  }
}
