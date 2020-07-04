/* @flow strict */
import { notEmptyString } from '../../validators';

export const validators = {
  title: notEmptyString('Title'),
  content: notEmptyString('Content'),
  description: notEmptyString('Description'),
};
