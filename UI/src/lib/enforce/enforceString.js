/* @flow strict */
import { isString } from '../is';
import { enforce } from './enforce';

export function enforceString(
  value: mixed,
  errText: string = 'Unexpected non-string',
): string {
  return enforce(value, isString, errText);
}
