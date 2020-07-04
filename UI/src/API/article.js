/* @flow strict */
import { array } from 'typed-contracts';

import { http } from './http';
import { Article } from '../contracts';
import { toStrictValidator } from '../contracts/utils';

const route = '/articles';
const articlesContract = array(Article.contract);
const validateArticles = toStrictValidator(articlesContract('Articles'));

export const article = {
  getArticles() {
    return http.get(route).then(validateArticles);
  },

  getById(id: string) {
    return http.get(`${route}/${id}`).then(Article.validate);
  },

  update(data: Article.Type) {
    return http.put(route, { data }).then(Article.validate);
  },

  create(data: Article.Default) {
    return http.post(route, { data }).then(Article.validate);
  },
};
