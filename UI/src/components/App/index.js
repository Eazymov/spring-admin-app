/* @flow strict */
import * as React from 'react';

import { Main } from '../Main';
import { Sidebar } from '../Sidebar';
import { LoginProvider } from '../../providers';

type Props = {||};

export function App(props: Props) {
  return (
    <LoginProvider>
      <Sidebar />
      <Main />
    </LoginProvider>
  );
}
