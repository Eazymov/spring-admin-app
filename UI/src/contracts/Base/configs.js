/* @flow strict */
import * as t from 'typed-contracts';

import { User } from '../User';

function nestedContract(name: string, value: mixed) {
  return t.object(User.shortConfig)(name, value);
}

export const config = {
  id: t.string,
  createdOn: t.string,
  updatedOn: t.string,
  createdBy: nestedContract,
  updatedBy: nestedContract,
};

export const shortConfig = {
  id: t.string,
};
