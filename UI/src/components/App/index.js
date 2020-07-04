/* @flow strict */
import * as React from 'react';

import { Main } from '../Main';
import { Sidebar } from '../Sidebar';
import { SignInProvider } from '../../providers';

type Props = {||};

export function App(props: Props) {
  return (
    <SignInProvider>
      <Sidebar />
      <Main />
    </SignInProvider>
  );
}
