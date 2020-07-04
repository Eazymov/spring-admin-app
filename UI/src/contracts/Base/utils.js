/* @flow strict */
import { v4 } from 'uuid';

import { validateDefault } from './validators';

export function getDefault() {
  return validateDefault({
    id: v4(),
    createdOn: null,
    updatedOn: null,
    createdBy: null,
    updatedBy: null,
  });
}
