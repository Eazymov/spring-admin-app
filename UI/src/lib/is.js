/* @flow strict */

export function isDef(arg: mixed): boolean %checks {
  return typeof arg !== 'undefined';
}

export function isUndef(arg: mixed): boolean %checks {
  return typeof arg === 'undefined';
}

export function isNull(arg: mixed): boolean %checks {
  return arg === null;
}

export function isTrue(arg: mixed): boolean %checks {
  return arg === true;
}

export function isBool(arg: mixed): boolean %checks {
  return typeof arg === 'boolean';
}

export function isNotNull(arg: mixed): boolean %checks {
  return !isNull(arg);
}

export function isMaybe(arg: mixed): boolean %checks {
  return isNull(arg) || isUndef(arg);
}

export function isNotMaybe(arg: mixed): boolean %checks {
  return !isMaybe(arg);
}

export function isNode(arg: mixed): boolean %checks {
  return arg instanceof Node;
}

export function isArray(arg: mixed): boolean %checks {
  return /* :: arg instanceof Array && */ Array.isArray(arg);
}

export function isFunc(arg: mixed): boolean %checks {
  return typeof arg === 'function';
}

export function isString(arg: mixed): boolean %checks {
  return typeof arg === 'string';
}

export function isNumber(arg: mixed): boolean %checks {
  return typeof arg === 'number';
}

export function isObject(arg: mixed): boolean %checks {
  return typeof arg === 'object' && isNotNull(arg);
}

export function isFloat(arg: mixed): boolean %checks {
  return isNumber(arg) && isFinite(arg);
}

export function isEmpty<T>(arg: string | $ReadOnlyArray<T>): boolean {
  return arg.length === 0;
}

export function isNotEmpty<T>(arg: string | $ReadOnlyArray<T>): boolean {
  return arg.length > 0;
}
