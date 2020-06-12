/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { CardBody } from './Body';
import { CardHeader } from './Header';
import { CardFooter } from './Footer';
import { CN } from '../../lib/string';

type Props = {|
  className?: string,
  children: React.Node,
|};

export function Card(props: Props) {
  return (
    <div className={CN(styles.Card, props.className)}>{props.children}</div>
  );
}

Card.Body = CardBody;
Card.Header = CardHeader;
Card.Footer = CardFooter;
