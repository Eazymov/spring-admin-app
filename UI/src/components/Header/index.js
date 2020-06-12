/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import invariant from 'invariant';
import { Route, Switch, generatePath } from 'react-router-dom';

import { isDef } from '../../lib/is';
import { UserBar } from '../UserBar';
import { PathName } from './PathName';
import { getLast } from '../../lib/array';
import { navigationPaths } from './utils';

type Props = {||};

export function Header(props: Props) {
  return (
    <div className={styles.Header}>
      <Switch>
        {navigationPaths.map((navigationPath, idx) => {
          const lastRoute = getLast(navigationPath);

          invariant(isDef(lastRoute), 'Unexpected undefined');

          console.log(navigationPath);

          return (
            <Route
              exact
              // eslint-disable-next-line react/no-array-index-key
              key={idx}
              path={lastRoute.path}
              render={({ match }) => (
                <>
                  <h3 className={styles.title}>{lastRoute.title}</h3>
                  <div className={styles.path}>
                    Location:
                    {navigationPath.map(route => {
                      const { path } = route;
                      const { params } = match;
                      const linkWithParams = generatePath(path, params);

                      return (
                        <PathName
                          route={route}
                          key={linkWithParams}
                          link={linkWithParams}
                        />
                      );
                    })}
                  </div>
                </>
              )}
            />
          );
        })}
      </Switch>
      <UserBar className={styles.userBar} />
    </div>
  );
}
