/* @flow strict */
import { Base } from '../Base';
import type { Default } from './types';
import { validateDefault } from './validators';

export function getDefault(): Default {
  return validateDefault({
    ...Base.getDefault(),
    title: '',
    content: '',
    description: '',
  });
}
