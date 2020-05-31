/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { Label } from './Label';
import { Control } from './Control';
import { CN } from '../../../lib/string';

type Props = {|
  inline?: boolean,
  className?: string,
  children:
    | React.Element<typeof Control>
    | [React.Element<typeof Label>, React.Element<typeof Control>],
|};

export function Field(props: Props) {
  const classNames = CN(styles.Field, props.className, {
    [styles.inline]: props.inline,
  });

  return <div className={classNames}>{props.children}</div>;
}

Field.Label = Label;
Field.Control = Control;
