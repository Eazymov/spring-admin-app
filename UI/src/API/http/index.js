/* @flow strict */

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

function request(route: string, config: Config) {
  const routeWithoutSlash = route.replace(/^\//, '');
  const url = `${API_URL}${routeWithoutSlash}`;

  return fetch(url, {
    method: config.method,
    credentials: CREDENTIALS.INCLUDE,
    body: JSON.stringify(config.data),
  }).then(res => res.json());
}

export const http = {
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
