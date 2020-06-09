/* @flow strict */
import { http } from './http';
import { User } from '../contracts';
import { validateString } from '../contracts/validators';

type LoginForm = {|
  username: string,
  password: string,
|};

export const user = {
  getUsers() {
    return http.get('/users');
  },

  login(form: LoginForm) {
    return http
      .post('/login', {
        data: form,
      })
      .then(validateString)
      .then(http.setAuthToken);
  },

  getCurrent() {
    return http.get('/users/current').then(User.validate);
  },
};
