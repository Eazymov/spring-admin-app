/* @flow strict */
import * as t from 'typed-contracts';

import { Base } from '../Base';
import { rolesEnum } from './enums';

export const config = {
  ...Base.config,
  email: t.string,
  username: t.string,
  lastName: t.string,
  firstName: t.string,
  patronymic: t.string,
  password: t.string.maybe,
  role: t.union(...rolesEnum.values()),
};

export const shortConfig = {
  ...Base.shortConfig,
  username: t.string,
};

export const defaultConfig = {
  ...Base.defaultConfig,
  role: config.role,
  password: t.string,
  email: config.email,
  username: config.username,
  lastName: config.lastName,
  firstName: config.firstName,
  patronymic: config.patronymic,
};
