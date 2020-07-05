/* @flow strict */
import * as React from 'react';

import type {
  Errors,
  Setters,
  Validity,
  Required,
} from '../../../lib/hooks/useForm';
import { User } from '../../../contracts';
import { isFalse } from '../../../lib/is';
import { useIsAdmin } from '../../../store/user';
import { BusinessError } from '../../../lib/error';
import { Form, Error, Input, UserRoleSelect } from '../../../controls';

type Props<F> = {|
  form: F,
  errors: Errors<F>,
  setters: Setters<F>,
  validity: Validity<F>,
  required: Required<F>,
  singleColumn?: boolean,
  error: null | BusinessError,
  createSetter: (field: $Keys<F>) => (value: mixed) => mixed,
|};

const { Field } = Form;
const { sizes } = Form.Col;

export function UserForm<F: User.Type | User.Default>(props: Props<F>) {
  const {
    form,
    error,
    errors,
    setters,
    validity,
    required,
    createSetter,
    singleColumn = false,
  } = props;
  const isAdmin = useIsAdmin();
  const colSize = singleColumn ? sizes.XII : sizes.VI;

  return (
    <Form.Container>
      <Form.Col size={colSize}>
        <Field>
          <Field.Label required={required.username}>Username</Field.Label>
          <Field.Control error={errors.username}>
            <Input.Text
              value={form.username}
              error={!validity.username}
              onChange={setters.username}
            />
          </Field.Control>
        </Field>
      </Form.Col>

      <Form.Col size={colSize}>
        <Field>
          <Field.Label required={required.password}>Password</Field.Label>
          <Field.Control error={errors.password}>
            <Input.Password
              value={form.password ?? ''}
              error={isFalse(validity.password)}
              onChange={createSetter('password')}
              autoComplete={Input.autoComplete.NEW_PASSWORD}
            />
          </Field.Control>
        </Field>
      </Form.Col>

      <Form.Col size={colSize}>
        <Field>
          <Field.Label required={required.firstName}>First Name</Field.Label>
          <Field.Control error={errors.firstName}>
            <Input.Text
              value={form.firstName}
              error={!validity.firstName}
              onChange={setters.firstName}
            />
          </Field.Control>
        </Field>
      </Form.Col>

      <Form.Col size={colSize}>
        <Field>
          <Field.Label required={required.lastName}>Last Name</Field.Label>
          <Field.Control error={errors.lastName}>
            <Input.Text
              value={form.lastName}
              error={!validity.lastName}
              onChange={setters.lastName}
            />
          </Field.Control>
        </Field>
      </Form.Col>

      <Form.Col size={colSize}>
        <Field>
          <Field.Label required={required.patronymic}>Patronymic</Field.Label>
          <Field.Control error={errors.patronymic}>
            <Input.Text
              value={form.patronymic}
              error={!validity.patronymic}
              onChange={setters.patronymic}
            />
          </Field.Control>
        </Field>
      </Form.Col>

      <Form.Col size={colSize}>
        <Field>
          <Field.Label required={required.email}>Email</Field.Label>
          <Field.Control error={errors.email}>
            <Input.Email
              value={form.email}
              error={!validity.email}
              onChange={setters.email}
            />
          </Field.Control>
        </Field>
      </Form.Col>

      {isAdmin && (
        <Form.Col size={colSize}>
          <Field>
            <Field.Label required={required.role}>Role</Field.Label>
            <Field.Control error={errors.role}>
              <UserRoleSelect value={form.role} onChange={setters.role} />
            </Field.Control>
          </Field>
        </Form.Col>
      )}

      {error && (
        <Form.Col size={sizes.XII}>
          <Error error={error} />
        </Form.Col>
      )}
    </Form.Container>
  );
}
