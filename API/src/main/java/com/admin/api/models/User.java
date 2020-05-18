package com.admin.api.models;

import java.util.UUID;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id;
  private String firstName;
  private String lastName;
  private String patronymic;
  private String role;
  private String createdOn;
  private String updatedOn;
  private String createdBy;
  private String updatedBy;

  public User() {}

  public User(
    UUID id,
    String firstName,
    String lastName,
    String patronymic,
    String role,
    String createdOn,
    String updatedOn,
    String createdBy,
    String updatedBy
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.role = role;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
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

  public String getRole() {
    return this.role;
  }

  public String getCreatedOn() {
    return this.createdOn;
  }

  public String getUpdatedOn() {
    return this.updatedOn;
  }

  public String getCreatedBy() {
    return this.createdBy;
  }

  public String getUpdatedBy() {
    return this.updatedBy;
  }
}
