/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { SignInForm } from './Form';

type Props = {||};

export function SignIn(props: Props) {
  return (
    <div className={styles.SignIn}>
      <SignInForm />
    </div>
  );
}
