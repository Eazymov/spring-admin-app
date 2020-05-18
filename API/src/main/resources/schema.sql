DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS cities;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TYPE IF EXISTS userRole;

CREATE TYPE userRole AS ENUM (
  'Standard',
  'Admin',
  'SuperAdmin'
);

CREATE TABLE users(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  patronymic VARCHAR(255) NOT NULL,
  role userRole NOT NULL,
  createdOn TIMESTAMP NOT NULL,
  updatedOn TIMESTAMP NOT NULL,
  createdById UUID NOT NULL,
  updatedBy UUID NOT NULL
);
