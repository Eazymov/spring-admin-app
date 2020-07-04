/* @flow strict */
import { array } from 'typed-contracts';

import { http } from './http';
import { User } from '../contracts';
import { enforceString } from '../lib/enforce';
import { toStrictValidator } from '../contracts/utils';

type LoginForm = {|
  username: string,
  password: string,
|};

const route = '/users';
const usersContract = array(User.contract);
const validateUsers = toStrictValidator(usersContract('Users'));

export const user = {
  getUsers() {
    return http.get(route).then(validateUsers);
  },

  login(form: LoginForm) {
    return http
      .post('/login', {
        data: form,
      })
      .then(enforceString)
      .then(http.setAuthToken);
  },

  getById(id: string) {
    return http.get(`${route}/${id}`).then(User.validate);
  },

  update(data: User.Type) {
    return http.put(route, { data }).then(User.validate);
  },

  create(data: User.Default) {
    return http.post(route, { data }).then(User.validate);
  },

  getCurrent() {
    return http.get(`${route}/current`).then(User.validate);
  },
};
