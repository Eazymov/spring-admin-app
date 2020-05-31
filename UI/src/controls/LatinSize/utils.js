/* @flow strict */
import { getValues } from '../../lib/object';

import { type Size, SIZES } from './constants';

const sizeValues = getValues(SIZES);

export function validateSize(value: mixed): null | Size {
  for (const size of sizeValues) {
    if (size === value) {
      return size;
    }
  }

  return null;
}
