/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { UserForm } from '../Form';
import { validators } from '../Form/validators';
import { isNull, isNotNull } from '../../../lib/is';
import { enforceString } from '../../../lib/enforce';
import { routes, ROUTE_PARAMS } from '../../../routes';
import { Card, Form, Icon, Error, Button } from '../../../controls';
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
    isUpdating,
    loadingError,
    updatingError,
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
      <Form initialForm={user} validators={validators} onSubmit={handleSubmit}>
        {({
          form,
          submit,
          errors,
          setters,
          required,
          validity,
          createSetter,
        }) => (
          <>
            <Card.Body>
              <UserForm
                form={form}
                errors={errors}
                setters={setters}
                validity={validity}
                required={required}
                error={updatingError}
                createSetter={createSetter}
              />
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={submit}
                loading={isUpdating}
                size={Button.sizes.BIG}
                theme={Button.themes.PRIMARY}
                leftIcon={<Icon.icons.Edit width={16} />}
              >
                Update
              </Button>
            </Card.Footer>
          </>
        )}
      </Form>
    </Card>
  );
}
