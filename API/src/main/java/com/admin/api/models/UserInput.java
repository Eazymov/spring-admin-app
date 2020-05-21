package com.admin.api.models;

import java.util.UUID;

import com.admin.api.enums.UserRole;

import javax.validation.constraints.NotNull;

public class UserInput {
  @NotNull
  private UUID id;

  @NotNull
  private String firstName;

  @NotNull
  private String lastName;

  @NotNull
  private String patronymic;

  @NotNull
  private String userName;

  @NotNull
  private String email;

  @NotNull
  private String password;

  @NotNull
  private UserRole role;

  public UserInput() {}

  public UserInput(
    UUID id,
    String firstName,
    String lastName,
    String patronymic,
    String userName,
    String email,
    String password,
    UserRole role
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.userName = userName;
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

  public String getUserName() {
    return this.userName;
  }

  public String getEmail() {
    return this.email;
  }

  public String getPassword() {
    return this.password;
  }

  public UserRole getRole() {
    return this.role;
  }
}
