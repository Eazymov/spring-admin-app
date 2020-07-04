/* @flow strict */

export const HTTP_METHODS = {
  GET: ('get': 'get'),
  PUT: ('put': 'put'),
  POST: ('post': 'post'),
};

export type HttpMethod = $Values<typeof HTTP_METHODS>;
