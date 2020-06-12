/* @flow strict */
import styles from '../styles.module.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import type { NavigationPathRoute } from '../utils';

type Props = {|
  link: string,
  route: NavigationPathRoute,
|};

export function PathName(props: Props) {
  const { route } = props;

  return (
    <>
      <span className={styles.delimiter}>/</span>
      <Link to={props.link} className={styles.link}>
        {route.title}
      </Link>
    </>
  );
}
