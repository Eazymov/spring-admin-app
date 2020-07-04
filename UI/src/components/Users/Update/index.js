/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { UserForm } from '../Form';
import { Card, Error } from '../../../controls';
import { isNull, isNotNull } from '../../../lib/is';
import { enforceString } from '../../../lib/enforce';
import { routes, ROUTE_PARAMS } from '../../../routes';
import { useUser, useSubmit, useRouteParam } from '../../../lib/hooks';

type Props = {||};

function getBackRoute(user) {
  return routes.user.read.path(user.id);
}

export function UserUpdate(props: Props) {
  const {
    user,
    loadUser,
    updateUser,
    isCreating,
    loadingError,
    creatingError,
  } = useUser();
  const handleSubmit = useSubmit(updateUser, getBackRoute);
  const id = useRouteParam(ROUTE_PARAMS.USER_ID.name, enforceString);

  React.useEffect(() => {
    loadUser(id);
  }, [id, loadUser]);

  if (isNotNull(loadingError)) {
    return <Error error={loadingError} />;
  }

  if (isNull(user)) {
    return null;
  }

  return (
    <Card className={styles.UserUpdate}>
      <Card.Header title="Update User" />
      <UserForm
        initialForm={user}
        error={creatingError}
        isLoading={isCreating}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}
