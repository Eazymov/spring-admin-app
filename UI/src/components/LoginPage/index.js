/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { LoginForm } from './Form';

type Props = {||};

export function LoginPage(props: Props) {
  return (
    <div className={styles.LoginPage}>
      <LoginForm />
    </div>
  );
}
