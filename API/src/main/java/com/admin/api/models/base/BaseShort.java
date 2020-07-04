package com.admin.api.models.base;

import java.util.UUID;

import java.sql.Timestamp;

import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;

import com.admin.api.models.user.ShortUserSerializer;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

public class Base {
  @Id
  private UUID id;

  private Timestamp createdOn;

  private Timestamp updatedOn;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "createdById")
  @JsonSerialize(using = ShortUserSerializer.class)
  private Base createdBy;

  @OneToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "updatedById")
  @JsonSerialize(using = ShortUserSerializer.class)
  private Base updatedBy;

  public Base() {}

  public Base(
    UUID id,
    Timestamp createdOn,
    Timestamp updatedOn,
    Base createdBy,
    Base updatedBy
  ) {
    this.id = id;
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

  public Timestamp getCreatedOn() {
    return createdOn;
  }

  public Timestamp getUpdatedOn() {
    return updatedOn;
  }

  public Base getCreatedBy() {
    return createdBy;
  }

  public Base getUpdatedBy() {
    return updatedBy;
  }
}
