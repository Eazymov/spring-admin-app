package com.admin.api.models.base;

import java.util.UUID;

import java.sql.Timestamp;

import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;

import com.admin.api.models.user.User;
import com.admin.api.models.user.ShortUserSerializer;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@MappedSuperclass
public class Base {
  @Id
  private UUID id;

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

  public Base() {}

  public Base(
    UUID id,
    Timestamp createdOn,
    Timestamp updatedOn,
    User createdBy,
    User updatedBy
  ) {
    this.id = id;
    this.createdOn = createdOn;
    this.updatedOn = updatedOn;
    this.createdBy = createdBy;
    this.updatedBy = updatedBy;
  }

  public UUID getId() {
    return id;
  }

  public Timestamp getCreatedOn() {
    return createdOn;
  }

  public Timestamp getUpdatedOn() {
    return updatedOn;
  }

  public void setUpdatedOn(Timestamp updatedOn) {
    this.updatedOn = updatedOn;
  }

  public User getCreatedBy() {
    return createdBy;
  }

  public void setCreatedBy(User createdBy) {
    this.createdBy = createdBy;
  }

  public User getUpdatedBy() {
    return updatedBy;
  }

  public void setUpdatedBy(User updatedBy) {
    this.updatedBy = updatedBy;
  }
}
