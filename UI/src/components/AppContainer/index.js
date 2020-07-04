/* @flow strict */
import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';
import { routes } from '../../routes';

type Props = {|
  children: React.Node,
|};

export function AppContainer(props: Props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.signIn.index.path}>
          <SignIn />
        </Route>
        <Route path={routes.signUp.index.path}>
          <SignUp />
        </Route>
        <Route path={routes.root.path}>{props.children}</Route>
      </Switch>
    </BrowserRouter>
  );
}
