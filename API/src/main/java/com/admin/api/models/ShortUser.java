package com.admin.api.models;

import java.util.UUID;

public class ShortUser {
  private UUID id = UUID.randomUUID();
  private String firstName;

  public ShortUser(
    UUID id,
    String firstName
  ) {
    this.id = id;
    this.firstName = firstName;
  }

  public UUID getId() {
    return this.id;
  }

  public String getFirstName() {
    return this.firstName;
  }
}
