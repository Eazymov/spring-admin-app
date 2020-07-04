/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { SignUpForm } from './Form';

type Props = {||};

export function SignUp(props: Props) {
  return (
    <div className={styles.SignUp}>
      <SignUpForm />
    </div>
  );
}
