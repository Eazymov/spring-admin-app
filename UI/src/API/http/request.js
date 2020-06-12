/* @flow strict */
import type { Config } from './types';
import { isNotNull } from '../../lib/is';
import { Storage } from '../../lib/Storage';
import { HTTP_HEADERS } from '../../constants';
import { BusinessError } from '../../lib/error';

const CREDENTIALS = {
  INCLUDE: ('include': 'include'),
};

const API_URL = 'http://localhost:8080/api/';

export function request(route: string, config: Config) {
  const routeWithoutSlash = route.replace(/^\//, '');
  const url = `${API_URL}${routeWithoutSlash}`;
  const body = JSON.stringify(config.data);
  const token = Storage.getToken();
  const headers = {};

  if (isNotNull(token)) {
    headers[HTTP_HEADERS.AUTHORIZATION] = `Bearer ${token}`;
  }

  return fetch(url, {
    body,
    headers,
    method: config.method,
    credentials: CREDENTIALS.INCLUDE,
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new BusinessError(res.statusText, res.status);
    })
    .then((data: mixed) => data);
}
