/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { UserForm } from '../Form';
import { routes } from '../../../routes';
import { User } from '../../../contracts';
import { validators } from '../Form/validators';
import { useUser, useSubmit } from '../../../lib/hooks';
import { Card, Form, Icon, Button } from '../../../controls';

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
      <Form
        validators={validators}
        onSubmit={handleSubmit}
        initialForm={initialForm}
      >
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
                required={required}
                validity={validity}
                error={creatingError}
                createSetter={createSetter}
              />
            </Card.Body>
            <Card.Footer>
              <Button
                onClick={submit}
                loading={isCreating}
                size={Button.sizes.BIG}
                theme={Button.themes.PRIMARY}
                leftIcon={<Icon.icons.Edit width={16} />}
              >
                Create
              </Button>
            </Card.Footer>
          </>
        )}
      </Form>
    </Card>
  );
}
