/* @flow strict */
import { isString } from '../../lib/is';
import { type Route, type Group, navigation } from '../../navigation';

export type NavigationPathRoute = {|
  path: string,
  title: string,
  config: Route,
|};

type NavigationPath = $ReadOnlyArray<NavigationPathRoute>;

function toString(path: string | (() => string)) {
  return isString(path) ? path : path();
}

function flattifyRoutes(
  routes: $ReadOnlyArray<Route>,
  basePath: NavigationPath = [],
) {
  const navigationPaths = [];

  routes.forEach(route => {
    const path = [
      ...basePath,
      {
        config: route,
        title: route.title,
        path: toString(route.path),
      },
    ];
    const { subRoutes } = route;

    navigationPaths.push(path);

    if (subRoutes) {
      navigationPaths.push(...flattifyRoutes(subRoutes, path));
    }
  });

  return navigationPaths;
}

export const navigationPaths = navigation.reduce(
  (acc: NavigationPath[], group: Group) => {
    acc.push(...flattifyRoutes(group.routes));

    return acc;
  },
  [],
);
