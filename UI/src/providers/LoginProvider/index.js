/* @flow strict */
import * as React from 'react';

import { isNull } from '../../lib/is';
import { LoginPage } from '../../components';
import { useLoggedInUser } from '../../store/user';

type Props = {|
  children: React.Node,
|};

export function LoginProvider(props: Props) {
  const [user] = useLoggedInUser();

  if (isNull(user)) {
    return <LoginPage />;
  }

  return props.children;
}
