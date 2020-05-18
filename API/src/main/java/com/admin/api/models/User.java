package com.admin.api.models;

import java.util.UUID;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import javax.validation.constraints.Size;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name = "users")
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
public class User {
  @Id
  @NotNull
  @GeneratedValue(strategy = GenerationType.AUTO)
  private UUID id = UUID.randomUUID();

  @NotNull
  @Size(min = 0, max = 255)
  private String firstName;

  @NotNull
  @Size(min = 0, max = 255)
  private String lastName;

  @NotNull
  @Size(min = 0, max = 255)
  private String patronymic;

  @NotNull
  private String role;

  @NotNull
  private String createdOn;

  @NotNull
  private String updatedOn;

  @NotNull
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "createdById")
  private User createdBy;

  @NotNull
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
    User createdBy,
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

  public User getCreatedBy() {
    return this.createdBy;
  }

  public String getUpdatedBy() {
    return this.updatedBy;
  }
}
