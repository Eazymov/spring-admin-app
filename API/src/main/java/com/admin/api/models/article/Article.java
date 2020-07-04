package com.admin.api.models;

import com.admin.api.enums.UserRole;
import com.admin.api.models.user.ShortUserSerializer;
import com.admin.api.utils.SQLEnum;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "users")
@TypeDef(name = "enum", typeClass = SQLEnum.class)
public class Article {
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
  private Article createdBy;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "updatedById")
  @JsonSerialize(using = ShortUserSerializer.class)
  private Article updatedBy;

  public Article() {}

  public Article(
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
    Article createdBy,
    Article updatedBy
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

  public UserRole getRole() {
    return role;
  }

  public Timestamp getCreatedOn() {
    return createdOn;
  }

  public Timestamp getUpdatedOn() {
    return updatedOn;
  }

  public Article getCreatedBy() {
    return createdBy;
  }

  public Article getUpdatedBy() {
    return updatedBy;
  }
}
