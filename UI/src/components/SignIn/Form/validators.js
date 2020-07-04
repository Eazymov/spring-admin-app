/* @flow strict */
import { isNotEmpty } from '../../../lib/is';

export const validators = {
  username(value: string) {
    return {
      isValid: isNotEmpty(value),
      errorText: 'Username is required',
    };
  },

  password(value: string) {
    return {
      isValid: isNotEmpty(value),
      errorText: 'Password is required',
    };
  },
};
