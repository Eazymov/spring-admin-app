/* @flow strict */
import { ValidationError } from 'typed-contracts';

import type { Validator, StrictValidator } from './types';

function formatError(err: ValidationError, level: number = 0) {
  const br = '\n';
  const indentBase = '  ';
  const indent = `| ${indentBase.repeat(level)}`;
  const nextLevel = level + 1;

  return err.nested.reduce(
    (acc, cur) => acc + br + indent + br + indent + formatError(cur, nextLevel),
    err.message,
  );
}

export function toStrictValidator<T>(
  validator: Validator<T>,
): StrictValidator<T> {
  return (value: mixed): T => {
    const validationResult = validator(value);

    if (validationResult instanceof ValidationError) {
      const message = formatError(validationResult);

      // eslint-disable-next-line no-console
      console.log(message);

      throw new Error(message);
    }

    return (validationResult: T);
  };
}
