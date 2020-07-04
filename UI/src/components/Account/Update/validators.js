/* @flow strict */
import { isMaybe, isNotEmpty } from '../../../lib/is';
import { email, notEmptyString } from '../../validators';

export const validators = {
  email: email('Email'),
  username: notEmptyString('Username'),
  lastName: notEmptyString('Last Name'),
  firstName: notEmptyString('First Name'),
  patronymic: notEmptyString('Patronymic'),
  password: (value: ?string) => ({
    isValid: isMaybe(value) || isNotEmpty(value),
    errorText: 'Password is not valid',
  }),
};
