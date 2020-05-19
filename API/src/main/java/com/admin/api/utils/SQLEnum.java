package com.admin.api.utils;

import java.sql.Types;
import java.sql.SQLException;
import java.sql.PreparedStatement;

import org.hibernate.type.EnumType;
import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;

public class SQLEnum extends EnumType {
  public void nullSafeSet(
    PreparedStatement statement, 
    Object value, 
    int index, 
    SharedSessionContractImplementor session
  ) throws HibernateException, SQLException {

    if (value == null) {
      statement.setNull(index, Types.OTHER);
    } else {
      statement.setObject( 
        index, 
        value.toString(), 
        Types.OTHER 
      );
    }
  }
}
