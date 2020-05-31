package com.admin.api.models.user;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.SerializerProvider;
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
  ) throws IOException {
    ShortUser shortUser = new ShortUser(user.getId(), user.getFirstName());

    generator.writeObject(shortUser);
  }
}
