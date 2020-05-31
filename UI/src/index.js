/* @flow strict */
// eslint-disable-next-line import/no-unassigned-import
import './scss/normalize.scss';

import React from 'react';

import { render } from './lib/react';
import { App, AppContainer } from './components';

const $root = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>,
  $root,
);
