/* @flow strict */
import { routes } from './routes';
import { Icon } from './controls';

export type PathComponentProps = {|
  // eslint-disable-next-line no-use-before-define
  config: Route,
|};

export type DefaultRoute = {|
  title: string,
  path: string | (() => string),
  // eslint-disable-next-line no-use-before-define
  subRoutes?: $ReadOnlyArray<Route>,
|};

export type SidebarRoute = {|
  ...$Exact<DefaultRoute>,
  showInSidebar: true,
  icon: $Values<typeof Icon.icons>,
|};

export type Route = SidebarRoute | DefaultRoute;

export type Group = {|
  title: string,
  routes: $ReadOnlyArray<Route>,
|};

export const navigation: $ReadOnlyArray<Group> = [
  {
    title: 'Account',
    routes: [
      {
        ...routes.account.index,
        title: 'Account',
        showInSidebar: true,
        icon: Icon.icons.UserLocked,
        subRoutes: [
          {
            ...routes.account.update,
            title: 'Update',
          },
        ],
      },
    ],
  },
  {
    title: 'Records',
    routes: [
      {
        ...routes.article.index,
        title: 'Articles',
        showInSidebar: true,
        icon: Icon.icons.Feed,
        subRoutes: [
          {
            ...routes.article.create,
            title: 'Add Article',
          },
          {
            ...routes.article.read,
            title: 'Read Article',
          },
          {
            ...routes.article.update,
            title: 'Update Article',
          },
        ],
      },
      {
        ...routes.user.index,
        title: 'Users',
        showInSidebar: true,
        icon: Icon.icons.Feed,
        subRoutes: [
          {
            ...routes.user.create,
            title: 'Add User',
          },
          {
            ...routes.user.read,
            title: 'Read User',
          },
          {
            ...routes.user.update,
            title: 'Update User',
          },
        ],
      },
    ],
  },
];
