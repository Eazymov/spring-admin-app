/* @flow strict */
import * as t from 'typed-contracts';

import { Base } from '../Base';
import { rolesEnum } from './enums';

export const config = {
  ...Base.config,
  lastName: t.string,
  firstName: t.string,
  patronymic: t.string,
  role: t.union(...rolesEnum.values()),
};
