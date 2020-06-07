package com.admin.api.models.user;

import java.util.UUID;

public class ShortUser {
  private UUID id;

  private String firstName;

  public ShortUser(
    UUID id,
    String firstName
  ) {
    this.id = id;
    this.firstName = firstName;
  }

  public UUID getId() {
    return id;
  }

  public String getFirstName() {
    return firstName;
  }
}
