CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE OR REPLACE PROCEDURE insert_data(superAdminId UUID, dateTime TIMESTAMP)
LANGUAGE SQL
AS $$
INSERT INTO users VALUES(
  superAdminId,
  'Имя',
  'Фамилия',
  'Отчество',
  'SuperAdmin',
  dateTime,
  dateTime,
  superAdminId,
  superAdminId
)
$$;

CALL insert_data(uuid_generate_v4(), LOCALTIMESTAMP);
