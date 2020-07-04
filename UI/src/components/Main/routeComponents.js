/* @flow strict */
import * as React from 'react';

import { Users } from '../Users';
import { routes } from '../../routes';
import { Articles } from '../Articles';
import { UserRead } from '../Users/Read';
import { UserUpdate } from '../Users/Update';
import { UserCreate } from '../Users/Create';
import { AccountRead } from '../Account/Read';
import { ArticleRead } from '../Articles/Read';
import { AccountUpdate } from '../Account/Update';
import { ArticleUpdate } from '../Articles/Update';
import { ArticleCreate } from '../Articles/Create';

type RouteProps = {||};

type Route = {|
  path: string | (() => string),
  component: React.ComponentType<RouteProps>,
|};

export const routeComponents: $ReadOnlyArray<Route> = [
  /**
   * Account
   */
  {
    ...routes.account.update,
    component: AccountUpdate,
  },
  {
    ...routes.account.index,
    component: AccountRead,
  },
  /**
   * Articles
   */
  {
    ...routes.article.update,
    component: ArticleUpdate,
  },
  {
    ...routes.article.create,
    component: ArticleCreate,
  },
  {
    ...routes.article.read,
    component: ArticleRead,
  },
  {
    ...routes.article.index,
    component: Articles,
  },
  /**
   * Users
   */
  {
    ...routes.user.update,
    component: UserUpdate,
  },
  {
    ...routes.user.create,
    component: UserCreate,
  },
  {
    ...routes.user.read,
    component: UserRead,
  },
  {
    ...routes.user.index,
    component: Users,
  },
];
