/* @flow strict */
import { Base } from '../Base';
import { validateDefault } from './validators';

export function getDefault() {
  return validateDefault({
    ...Base.getDefault(),
    title: '',
    content: '',
    description: '',
  });
}
