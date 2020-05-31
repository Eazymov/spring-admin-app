/* @flow strict */
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LoginProvider } from '../../providers';

type Props = {|
  children: React.Node,
|};

export function AppContainer(props: Props) {
  return (
    <BrowserRouter>
      <LoginProvider>{props.children}</LoginProvider>
    </BrowserRouter>
  );
}
