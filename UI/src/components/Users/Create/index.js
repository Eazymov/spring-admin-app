/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { UserForm } from '../Form';
import { routes } from '../../../routes';
import { Card } from '../../../controls';
import { User } from '../../../contracts';
import { useUser, useSubmit } from '../../../lib/hooks';

type Props = {||};

function getBackRoute(user) {
  return routes.user.read.path(user.id);
}

export function UserCreate(props: Props) {
  const { createUser, isCreating, creatingError } = useUser();
  const initialForm = React.useMemo(() => User.getDefault(), []);
  const handleSubmit = useSubmit(createUser, getBackRoute);

  return (
    <Card className={styles.UserCreate}>
      <Card.Header title="Create User" />
      <UserForm
        error={creatingError}
        isLoading={isCreating}
        onSubmit={handleSubmit}
        initialForm={initialForm}
      />
    </Card>
  );
}
