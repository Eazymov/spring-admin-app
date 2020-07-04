/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Link as BaseLink } from 'react-router-dom';

type LinkProps = React.ElementConfig<typeof BaseLink>;

type Props = {|
  ...$Exact<LinkProps>,
|};

export function Link(props: Props) {
  return <BaseLink {...props} className={styles.Link} />;
}
