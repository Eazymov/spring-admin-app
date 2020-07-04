/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import { isNull } from '../../../lib/is';
import { UserDetails } from '../Details';
import { enforceString } from '../../../lib/enforce';
import { routes, ROUTE_PARAMS } from '../../../routes';
import { Icon, Card, Button } from '../../../controls';
import { useUser, useRouteParam } from '../../../lib/hooks';

type Props = {||};

export function UserRead(props: Props) {
  const id = useRouteParam(ROUTE_PARAMS.USER_ID.name, enforceString);
  const { user, loadUser, loadingError } = useUser();

  React.useEffect(() => {
    loadUser(id);
  }, [id, loadUser]);

  if (isNull(user)) {
    return null;
  }

  return (
    <Card className={styles.UserRead}>
      <Card.Header title="User">
        <Link to={routes.user.update.path(user.id)}>
          <Button
            theme={Button.themes.PRIMARY}
            leftIcon={<Icon.icons.Edit width={16} />}
          >
            Update
          </Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <UserDetails user={user} error={loadingError} />
      </Card.Body>
    </Card>
  );
}
