package com.admin.api.utils;

public class Choose {
  public static <T> T or(T first, T second) {
    if (first == null) {
      return second;
    }

    return first;
  }
}
