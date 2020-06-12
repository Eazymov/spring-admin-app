/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Header } from '../Header';
import { CN } from '../../lib/string';
import { routes } from '../../routes';
import { isString } from '../../lib/is';
import { useIsOpen } from '../Sidebar/isOpen';
import { routeComponents } from './routeComponents';

type Props = {||};

export function Main(props: Props) {
  const [isOpen] = useIsOpen();

  return (
    <div className={CN(styles.Main, { [styles.shifted]: isOpen })}>
      <Header />
      <Switch>
        {routeComponents.map(route => {
          const { path } = route;
          const pathValue = isString(path) ? path : path();

          return (
            <Route key={pathValue} path={pathValue}>
              <route.component />
            </Route>
          );
        })}

        <Redirect to={routes.account.index.path} />
      </Switch>
    </div>
  );
}
