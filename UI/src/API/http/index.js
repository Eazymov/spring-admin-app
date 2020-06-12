/* @flow strict */
import { request } from './request';
import { Storage } from '../../lib/Storage';
import type { MethodConfig } from './types';
import { HTTP_METHODS } from '../../constants/HTTP_METHODS';

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
