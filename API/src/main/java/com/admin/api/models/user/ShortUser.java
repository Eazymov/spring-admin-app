package com.admin.api.models.user;

import java.util.UUID;

public class ShortUser {
  private UUID id;

  private String username;

  public ShortUser(
    UUID id,
    String username
  ) {
    this.id = id;
    this.username = username;
  }

  public UUID getId() {
    return id;
  }

  public String getUsername() {
    return username;
  }
}
