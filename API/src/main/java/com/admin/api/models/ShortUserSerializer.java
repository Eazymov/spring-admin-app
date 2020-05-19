package com.admin.api.models;

import java.io.IOException;

import com.admin.api.models.User;
import com.admin.api.models.ShortUser;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ser.std.StdSerializer;

public class ShortUserSerializer extends StdSerializer<User>{
  public ShortUserSerializer() {
    this(null);
  }

  public ShortUserSerializer(Class<User> user) {
    super(user);
  }

  @Override
  public void serialize(
    User user, 
    JsonGenerator generator, 
    SerializerProvider provider
  ) throws IOException, JsonProcessingException {
      
    ShortUser shortUser = new ShortUser(user.getId(), user.getFirstName());

    generator.writeObject(shortUser);
  }
}
