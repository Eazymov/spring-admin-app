/* @flow strict */
// eslint-disable-next-line import/no-unassigned-import
import './normalize.scss';

import React from 'react';

import { App } from './components';
import { render } from './lib/react';

const $root = document.getElementById('root');

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  $root,
);
