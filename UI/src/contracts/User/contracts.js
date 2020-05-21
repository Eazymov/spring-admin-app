/* @flow strict */
import * as t from 'typed-contracts';

import { config, shortConfig } from './configs';

export const contract = t.object(config);
export const shortContract = t.object(shortConfig);
