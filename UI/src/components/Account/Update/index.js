/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { routes } from '../../../routes';
import { UserForm } from '../../Users/Form';
import { useCurrentUser } from '../../../store/user';
import { Card, Icon, Button } from '../../../controls';
import { useForm, useUser, useSubmit } from '../../../lib/hooks';

type Props = {||};

export function AccountUpdate(props: Props) {
  const [user] = useCurrentUser();
  const { updateUser, isUpdating, updatingError } = useUser();
  const handleSubmit = useSubmit(updateUser, routes.account.index.path);
  const {
    form,
    errors,
    submit,
    setters,
    validity,
    required,
    createSetter,
  } = useForm(user, { onSubmit: handleSubmit });

  return (
    <Card className={styles.AccountUpdate}>
      <Card.Header title="Update Account" />
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
    </Card>
  );
}
