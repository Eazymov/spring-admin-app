/* @flow strict */

const USER_ID = 'articleId';
const ARTICLE_ID = 'articleId';

export const ROUTE_PARAMS = {
  USER_ID: {
    name: USER_ID,
    value: `:${USER_ID}`,
  },
  ARTICLE_ID: {
    name: ARTICLE_ID,
    value: `:${ARTICLE_ID}`,
  },
};

export const routes = {
  root: {
    path: '',
  },
  signIn: {
    index: {
      path: '/sign-in',
    },
  },
  signUp: {
    index: {
      path: '/sign-up',
    },
  },
  account: {
    index: {
      path: '/account',
    },
    update: {
      path: '/account/update',
    },
  },
  article: {
    index: {
      path: '/articles',
    },
    create: {
      path: '/articles/create',
    },
    read: {
      path: (id: string = ROUTE_PARAMS.ARTICLE_ID.value) => `/articles/${id}`,
    },
    update: {
      path: (id: string = ROUTE_PARAMS.ARTICLE_ID.value) =>
        `/articles/${id}/update`,
    },
  },
  user: {
    index: {
      path: '/users',
    },
    create: {
      path: '/users/create',
    },
    read: {
      path: (id: string = ROUTE_PARAMS.USER_ID.value) => `/users/${id}`,
    },
    update: {
      path: (id: string = ROUTE_PARAMS.USER_ID.value) => `/users/${id}/update`,
    },
  },
};
