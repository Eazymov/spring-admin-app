/* @flow strict */
import { contract } from './contracts';
import { toStrictValidator } from '../utils';

export const validate = toStrictValidator<*>(contract('User'));
