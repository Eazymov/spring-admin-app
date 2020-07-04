package com.admin.api.models.base;

import java.util.UUID;

public class BaseShort {
  private UUID id;

  public BaseShort() {}

  public BaseShort(
    UUID id
  ) {
    this.id = id;
  }

  public UUID getId() {
    return id;
  }
}
