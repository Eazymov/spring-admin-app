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
  role: t.union(...rolesEnum.values()),
};

export const shortConfig = {
  ...Base.shortConfig,
  firstName: t.string,
};
