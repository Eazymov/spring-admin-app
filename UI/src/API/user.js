/* @flow strict */
import { http } from './http';

type LoginForm = {|
  username: string,
  password: string,
|};

export const user = {
  getUsers() {
    return http.get('/users');
  },

  login(form: LoginForm) {
    return http.post('/login', {
      data: form,
    });
  },
};
