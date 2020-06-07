/* @flow strict */
import { isString } from '../is';
import { BusinessError } from './BusinessError';

function createError(message: string) {
  try {
    throw new Error(message);
  } catch (thrown) {
    return copyError(thrown);
  }
}

function copyError(err: Error) {
  const copy = new BusinessError(err.message);

  copy.stack = err.stack;

  return copy;
}

export function formatError(arg: mixed) {
  if (isString(arg)) {
    return createError(arg);
  }

  if (arg instanceof BusinessError) {
    return arg;
  }

  if (arg instanceof Error) {
    return copyError(arg);
  }

  return createError(String(arg));
}
