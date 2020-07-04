/* @flow strict */
import { toStrictValidator } from '../utils';
import { contract, defaultContract } from './contracts';

export const validate = toStrictValidator<*>(contract('Article'));
export const validateDefault = toStrictValidator<*>(
  defaultContract('ArticleDefault'),
);
