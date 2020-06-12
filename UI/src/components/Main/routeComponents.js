/* @flow strict */
import * as React from 'react';

import { Users } from '../Users';
import { routes } from '../../routes';
import { Articles } from '../Articles';

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
    component: () => 'Account',
  },
  {
    ...routes.account.index,
    component: () => 'Account',
  },
  /**
   * Articles
   */
  {
    ...routes.article.update,
    component: () => 'Article',
  },
  {
    ...routes.article.create,
    component: () => 'Article',
  },
  {
    ...routes.article.read,
    component: () => 'Article',
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
    component: () => 'Users',
  },
  {
    ...routes.user.create,
    component: () => 'Users',
  },
  {
    ...routes.user.read,
    component: () => 'Users',
  },
  {
    ...routes.user.index,
    component: Users,
  },
];
