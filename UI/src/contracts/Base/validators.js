/* @flow strict */
import { toStrictValidator } from '../utils';
import { contract, defaultContract } from './contracts';

export const validate = toStrictValidator<*>(contract('Base'));
export const validateDefault = toStrictValidator<*>(
  defaultContract('BaseDefault'),
);
