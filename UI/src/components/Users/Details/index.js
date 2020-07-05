/* @flow strict */
import * as React from 'react';

import { User } from '../../../contracts';
import { format } from '../../../lib/date';
import { BusinessError } from '../../../lib/error';
import { Form, Error, Input } from '../../../controls';

type Props = {|
  user: User.Type,
  error: null | BusinessError,
|};

const { Field } = Form;

export function UserDetails(props: Props) {
  const { user, error } = props;

  return (
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

      {error && (
        <Form.Col>
          <Error error={error} />
        </Form.Col>
      )}
    </Form.Container>
  );
}
