package com.admin.api.models;

import java.util.UUID;
import java.util.Optional;

import java.sql.Timestamp;

import com.admin.api.utils.SQLEnum;
import com.admin.api.enums.UserRole;
import com.admin.api.models.ShortUser;
import com.admin.api.models.ShortUserSerializer;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.EnumType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Enumerated;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.validation.constraints.Size;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Entity
@Table(name = "users")
@TypeDef(name = "enum", typeClass = SQLEnum.class)
public class User {
  @Id
  @NotNull
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
  @Type(type = "enum")
  @Enumerated(EnumType.STRING)
  private UserRole role;

  @NotNull
  private Timestamp createdOn;

  @NotNull
  private Timestamp updatedOn;

  @NotNull
  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "createdById")
  @JsonSerialize(using = ShortUserSerializer.class)
  private User createdBy;

  @NotNull
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
