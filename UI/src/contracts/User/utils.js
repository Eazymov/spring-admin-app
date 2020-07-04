/* @flow strict */
import { Base } from '../Base';
import { rolesEnum } from './enums';
import type { Default } from './types';
import { validateDefault } from './validators';

export function getDefault(): Default {
  return validateDefault({
    ...Base.getDefault(),
    email: '',
    username: '',
    lastName: '',
    password: '',
    firstName: '',
    patronymic: '',
    role: rolesEnum.STANDARD.value,
  });
}
