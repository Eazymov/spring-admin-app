/* @flow strict */

export function isDef(arg: mixed): boolean %checks {
  return typeof arg !== 'undefined';
}

export function isNull(arg: mixed): boolean %checks {
  return arg === null;
}

export function isNotNull(arg: mixed): boolean %checks {
  return !isNull(arg);
}
