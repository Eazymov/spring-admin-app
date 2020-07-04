/* @flow strict */
import { Base } from '../Base';
import { rolesEnum } from './enums';
import { validateDefault } from './validators';

export function getDefault() {
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
