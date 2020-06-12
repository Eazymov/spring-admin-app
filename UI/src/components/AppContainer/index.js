/* @flow strict */
import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { routes } from '../../routes';
import { LoginPage } from '../LoginPage';

type Props = {|
  children: React.Node,
|};

export function AppContainer(props: Props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.login.index.path}>
          <LoginPage />
        </Route>
        <Route path={routes.root.path}>{props.children}</Route>
      </Switch>
    </BrowserRouter>
  );
}
