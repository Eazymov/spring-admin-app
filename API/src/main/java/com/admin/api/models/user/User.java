package com.admin.api.models.user;

import java.util.UUID;

import java.sql.Timestamp;

import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.admin.api.utils.Choose;
import com.admin.api.utils.SQLEnum;
import com.admin.api.enums.UserRole;
import com.admin.api.models.base.Base;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
@TypeDef(name = "enum", typeClass = SQLEnum.class)
public class User extends Base {
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
    super(id, createdOn, updatedOn, createdBy, updatedBy);

    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.username = username;
    this.email = email;
    this.password = password;
    this.role = role;

    this.setCreatedBy(Choose.or(createdBy, this));
    this.setUpdatedBy(Choose.or(updatedBy, this));
  }

  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public String getPatronymic() {
    return patronymic;
  }

  public void setPatronymic(String patronymic) {
    this.patronymic = patronymic;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public UserRole getRole() {
    return role;
  }

  public void setRole(UserRole role) {
    this.role = role;
  }
}
