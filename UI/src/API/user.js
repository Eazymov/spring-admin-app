/* @flow strict */
import { array } from 'typed-contracts';

import { http } from './http';
import { User } from '../contracts';
import { toStrictValidator } from '../contracts/utils';
import { validateString } from '../contracts/validators';

type LoginForm = {|
  username: string,
  password: string,
|};

const usersContract = array(User.contract);
const validateUsers = toStrictValidator(usersContract('Users'));

export const user = {
  getUsers() {
    return http.get('/users').then(validateUsers);
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
