/* @flow strict */
import { ValidationError } from 'typed-contracts';

export type Validator<T> = mixed => ValidationError | T;

export type StrictValidator<T> = mixed => T;

// flowlint unclear-type:off
export type $ValidatorType<V: StrictValidator<any>> = $Call<V, mixed>;
