/* @flow strict */
import { HTTP_HEADERS } from '../../constants';
import { isString, isNotNull } from '../../lib/is';

// eslint-disable-next-line no-use-before-define
type HttpMethod = $Values<typeof HTTP_METHODS>;

type MethodConfig = {|
  data?: mixed,
|};

type Config = {|
  ...$Exact<MethodConfig>,
  method: HttpMethod,
|};

const HTTP_METHODS = {
  GET: ('get': 'get'),
  POST: ('post': 'post'),
};

const CREDENTIALS = {
  INCLUDE: ('include': 'include'),
};

const API_URL = 'http://localhost:8080/api/';

const Storage = {
  getToken() {
    const token = localStorage.getItem('token');

    if (isString(token)) {
      return JSON.parse(token);
    }

    return null;
  },

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  },

  removeToken(token: string) {
    localStorage.removeItem('token');
  },
};

function request(route: string, config: Config) {
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
    .then(res => res.json())
    .then((data: mixed) => data);
}

export const http = {
  setAuthToken: Storage.setToken,

  get(route: string, config?: MethodConfig) {
    return request(route, {
      ...config,
      method: HTTP_METHODS.GET,
    });
  },

  post(route: string, config?: MethodConfig) {
    return request(route, {
      ...config,
      method: HTTP_METHODS.POST,
    });
  },
};
