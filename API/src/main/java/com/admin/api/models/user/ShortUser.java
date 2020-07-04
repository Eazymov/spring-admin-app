package com.admin.api.models.user;

import java.util.UUID;

import com.admin.api.models.base.BaseShort;

public class ShortUser extends BaseShort {
  private String username;

  public ShortUser(
    UUID id,
    String username
  ) {
    super(id);

    this.username = username;
  }

  public String getUsername() {
    return username;
  }
}
