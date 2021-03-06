DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS articles;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TYPE IF EXISTS userRole;

CREATE TYPE userRole AS ENUM (
  'STANDARD',
  'ADMIN',
  'SUPER_ADMIN'
);

CREATE TABLE users(
  id UUID PRIMARY KEY NOT NULL,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  patronymic VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  role userRole NOT NULL,
  createdOn TIMESTAMP NOT NULL,
  updatedOn TIMESTAMP NOT NULL,
  createdById UUID NOT NULL,
  updatedById UUID NOT NULL
);

CREATE TABLE articles(
  id UUID PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  createdOn TIMESTAMP NOT NULL,
  updatedOn TIMESTAMP NOT NULL,
  createdById UUID NOT NULL,
  updatedById UUID NOT NULL
);
