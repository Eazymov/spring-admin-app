/* @flow strict */
import * as t from 'typed-contracts';

import { toStrictValidator } from './utils';

export const validateString = toStrictValidator<string>(t.string('string'));
