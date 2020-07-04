/* @flow strict */
import { isString } from './is';
import { enforceString } from './enforce';

const keys = {
  token: 'token',
};

export const Storage = {
  getToken() {
    const token = localStorage.getItem(keys.token);

    if (isString(token)) {
      return enforceString(JSON.parse(token));
    }

    return null;
  },

  setToken(token: string) {
    localStorage.setItem(keys.token, JSON.stringify(token));
  },

  removeToken() {
    localStorage.removeItem(keys.token);
  },
};
