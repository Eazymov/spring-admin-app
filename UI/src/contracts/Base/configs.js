/* @flow strict */
import * as t from 'typed-contracts';

import { User } from '../User';

function user(name: string, value: mixed) {
  return t.object(User.shortConfig)(name, value);
}

function maybeUser(name: string, value: mixed) {
  return t.object(User.shortConfig).maybe(name, value);
}

export const config = {
  id: t.string,
  createdOn: t.string,
  updatedOn: t.string,
  createdBy: user,
  updatedBy: user,
};

export const shortConfig = {
  id: t.string,
};

export const defaultConfig = {
  id: config.id,
  createdOn: config.createdOn.maybe,
  updatedOn: config.updatedOn.maybe,
  createdBy: maybeUser,
  updatedBy: maybeUser,
};
