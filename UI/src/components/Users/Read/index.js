/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import { isNull } from '../../../lib/is';
import { User } from '../../../contracts';
import { format } from '../../../lib/date';
import { enforceString } from '../../../lib/enforce';
import { routes, ROUTE_PARAMS } from '../../../routes';
import { useUser, useRouteParam } from '../../../lib/hooks';
import { Form, Icon, Card, Error, Input, Button } from '../../../controls';

type Props = {||};

const { Field } = Form;

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
        <Form.Container>
          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Username</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.username} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Password</Field.Label>
              <Field.Control>
                <Input.Password readOnly value={user.password ?? ''} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>First Name</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.firstName} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Last Name</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.lastName} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Patronymic</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.patronymic} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Email</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.email} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Role</Field.Label>
              <Field.Control>
                <Input.Text
                  readOnly
                  value={User.rolesEnum.getByValue(user.role).label}
                />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Updated by</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.updatedBy.username} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Updated on</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={format(user.updatedOn)} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Created by</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={user.createdBy.username} />
              </Field.Control>
            </Field>
          </Form.Col>

          <Form.Col>
            <Field inline>
              <Field.Label size={Field.Label.sizes.III}>Created on</Field.Label>
              <Field.Control>
                <Input.Text readOnly value={format(user.createdOn)} />
              </Field.Control>
            </Field>
          </Form.Col>

          {loadingError && (
            <Form.Col>
              <Error error={loadingError} />
            </Form.Col>
          )}
        </Form.Container>
      </Card.Body>
    </Card>
  );
}
