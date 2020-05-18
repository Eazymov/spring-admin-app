/* @flow strict */
import { type Contract, ValidationError } from 'typed-contracts';

export type Validator<T> = mixed => ValidationError | T;

export type StrictValidator<T> = mixed => T;

type ContractType = <T>(contract: Contract<T>) => T;

export type $ContractType<C: Contract<mixed>> = $Call<ContractType, C>;
