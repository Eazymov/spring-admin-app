/* @flow strict */
import { isNotNull } from '../is';
import { enforce } from './enforce';

export function enforceNonNull<T>(
  value: T | null,
  errText: string = 'Unexpected null',
): T {
  return enforce(value, isNotNull, errText);
}
