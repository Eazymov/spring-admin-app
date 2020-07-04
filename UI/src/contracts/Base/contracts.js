/* @flow strict */
import * as t from 'typed-contracts';

import { config, defaultConfig } from './configs';

export const contract = t.object(config);
export const defaultContract = t.object(defaultConfig);
