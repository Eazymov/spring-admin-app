/* @flow strict */
import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { API } from '../../API';
import { routes } from '../../routes';
import { Error } from '../../controls';
import { isNotNull } from '../../lib/is';
import { formatError } from '../../lib/error';
import { HTTP_STATUSES } from '../../constants';
import { useLoggedInUser } from '../../store/user';

type Props = {|
  children: React.Node,
|};

export function LoginProvider(props: Props) {
  const history = useHistory();
  const [user, setUser] = useLoggedInUser();
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    API.user
      .getCurrent()
      .then(setUser)
      .catch((thrown: mixed) => {
        const err = formatError(thrown);

        if (err.code === HTTP_STATUSES.UNAUTHORIZED) {
          history.push(routes.login.index.path);
        } else {
          setError(err);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isNotNull(error)) {
    return <Error error={error} />;
  }

  if (isNotNull(user)) {
    return props.children;
  }

  return null;
}
