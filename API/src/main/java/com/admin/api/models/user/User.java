package com.admin.api.models.user;

import java.util.UUID;

import java.sql.Timestamp;

import com.admin.api.utils.SQLEnum;
import com.admin.api.enums.UserRole;

import javax.persistence.*;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Entity
@Table(name = "users")
@TypeDef(name = "enum", typeClass = SQLEnum.class)
public class User {
  @Id
  private UUID id;

  @Size(min = 0, max = 255)
  private String firstName;

  @Size(min = 0, max = 255)
  private String lastName;

  @Size(min = 0, max = 255)
  private String patronymic;

  @Column(unique = true)
  @Size(min = 0, max = 255)
  private String username;

  @Size(min = 0, max = 255)
  private String email;

  @JsonIgnore
  private String password;

  @Type(type = "enum")
  @Enumerated(EnumType.STRING)
  private UserRole role;

  private Timestamp createdOn;

  private Timestamp updatedOn;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "createdById")
  @JsonSerialize(using = ShortUserSerializer.class)
  private User createdBy;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "updatedById")
  @JsonSerialize(using = ShortUserSerializer.class)
  private User updatedBy;

  public User() {}

  public User(
    UUID id,
    String firstName,
    String lastName,
    String patronymic,
    String username,
    String email,
    String password,
    UserRole role,
    Timestamp createdOn,
    Timestamp updatedOn,
    User createdBy,
    User updatedBy
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;

    if (createdBy == null) {
      this.createdBy = this;
    } else {
      this.createdBy = createdBy;
    }

    if (updatedBy == null) {
      this.updatedBy = this;
    } else {
      this.updatedBy = updatedBy;
    }
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

  public UserRole getRole() {
    return this.role;
  }

  public Timestamp getCreatedOn() {
    return this.createdOn;
  }

  public Timestamp getUpdatedOn() {
    return this.updatedOn;
  }

  public User getCreatedBy() {
    return this.createdBy;
  }

  public User getUpdatedBy() {
    return this.updatedBy;
  }
}
