/* @flow strict */
import { toStrictValidator } from '../utils';
import { contract, shortContract } from './contracts';

export const validate = toStrictValidator<*>(contract('User'));
export const validateShort = toStrictValidator<*>(shortContract('ShortUser'));
