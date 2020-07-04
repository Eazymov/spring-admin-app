/* @flow strict */
import type { Config } from './types';
import { Storage } from '../../lib/Storage';
import { BusinessError } from '../../lib/error';
import { isString, isNotNull } from '../../lib/is';
import { HTTP_HEADERS, CONTENT_TYPES } from '../../constants';

const CREDENTIALS = {
  INCLUDE: ('include': 'include'),
};

const API_URL = 'http://localhost:8080/api/';

export function request(route: string, config: Config) {
  const routeWithoutSlash = route.replace(/^\//, '');
  const url = `${API_URL}${routeWithoutSlash}`;
  const body = JSON.stringify(config.data);
  const token = Storage.getToken();
  const headers = new Headers();

  headers.set(HTTP_HEADERS.CONTENT_TYPE, CONTENT_TYPES.JSON);

  if (isNotNull(token)) {
    headers.set(HTTP_HEADERS.AUTHORIZATION, `Bearer ${token}`);
  }

  return fetch(url, {
    body,
    headers,
    method: config.method,
    credentials: CREDENTIALS.INCLUDE,
  })
    .then(res => {
      const newToken = res.headers.get('Auth-Token');

      if (isString(newToken)) {
        Storage.setToken(newToken);
      }

      if (res.ok) {
        return res.json();
      }

      throw new BusinessError(res.statusText, res.status);
    })
    .then((data: mixed) => data);
}
