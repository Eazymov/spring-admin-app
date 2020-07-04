/* @flow strict */
import { v4 } from 'uuid';

import type { Default } from './types';
import { validateDefault } from './validators';

export function getDefault(): Default {
  return validateDefault({
    id: v4(),
    createdOn: null,
    updatedOn: null,
    createdBy: null,
    updatedBy: null,
  });
}
