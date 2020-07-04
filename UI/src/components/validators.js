/* @flow strict */
import { isEmail, isNotEmpty } from '../lib/is';

export function notEmptyString(fieldName: string) {
  return (value: string) => ({
    isValid: isNotEmpty(value),
    errorText: `${fieldName} is required`,
  });
}

export function email(fieldName: string) {
  return (value: string) => ({
    isValid: isEmail(value),
    errorText: `${fieldName} is required`,
  });
}
