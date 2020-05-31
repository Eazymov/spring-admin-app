/* @flow strict */
import { getKeys } from '../object';
import { isObject, isString } from '../is';

type ClassNamesObject = {
  +[key: string]: boolean,
  ...
};

type Values = $ReadOnlyArray<string | void | null | ClassNamesObject>;

function handleObject(initial: string, object: ClassNamesObject) {
  const keys = getKeys(object);

  return keys.reduce((acc, key) => {
    const value = object[key];

    if (value) {
      return `${acc} ${key}`;
    }

    return acc;
  }, initial);
}

export function CN(...values: Values) {
  return values.reduce((acc, value) => {
    if (isString(value)) {
      return `${acc} ${value}`;
    }

    if (isObject(value)) {
      return handleObject(acc, value);
    }

    return acc;
  }, '');
}
