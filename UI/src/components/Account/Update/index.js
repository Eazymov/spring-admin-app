/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { routes } from '../../../routes';
import { UserForm } from '../../Users/Form';
import { Card, Error } from '../../../controls';
import { isNull, isNotNull } from '../../../lib/is';
import { useCurrentUser } from '../../../store/user';
import { useUser, useSubmit } from '../../../lib/hooks';

type Props = {||};

export function AccountUpdate(props: Props) {
  const { updateUser, isCreating, loadingError, creatingError } = useUser();
  const [user, setUser] = useCurrentUser();
  const afterSubmit = React.useCallback(
    updatedUser => {
      setUser(updatedUser);

      return routes.account.index.path;
    },
    [setUser],
  );
  const handleSubmit = useSubmit(updateUser, afterSubmit);

  if (isNotNull(loadingError)) {
    return <Error error={loadingError} />;
  }

  if (isNull(user)) {
    return null;
  }

  return (
    <Card className={styles.AccountUpdate}>
      <Card.Header title="Update Account" />
      <UserForm
        initialForm={user}
        error={creatingError}
        isLoading={isCreating}
        onSubmit={handleSubmit}
      />
    </Card>
  );
}
