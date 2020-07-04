/* @flow strict */
import * as React from 'react';

import {
  Form,
  Card,
  Icon,
  Error,
  Input,
  Button,
  UserRoleSelect,
} from '../../../controls';
import { validators } from './validators';
import { User } from '../../../contracts';
import { BusinessError } from '../../../lib/error';

type Props<F> = {|
  initialForm: F,
  isLoading: boolean,
  error: null | BusinessError,
  onSubmit: (form: F, isValid: boolean) => mixed,
|};

const { Field } = Form;

export function UserForm<F: User.Type | User.Default>(props: Props<F>) {
  const { error } = props;

  return (
    <Form
      validators={validators}
      onSubmit={props.onSubmit}
      initialForm={props.initialForm}
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
            <Form.Container>
              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.username}>
                    Username
                  </Field.Label>
                  <Field.Control error={errors.username}>
                    <Input.Text
                      value={form.username}
                      error={!validity.username}
                      onChange={setters.username}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.password}>
                    Password
                  </Field.Label>
                  <Field.Control error={errors.password}>
                    <Input.Password
                      error={!validity.password}
                      value={form.password ?? ''}
                      onChange={createSetter('password')}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.firstName}>
                    First Name
                  </Field.Label>
                  <Field.Control error={errors.firstName}>
                    <Input.Text
                      value={form.firstName}
                      error={!validity.firstName}
                      onChange={setters.firstName}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.lastName}>
                    Last Name
                  </Field.Label>
                  <Field.Control error={errors.lastName}>
                    <Input.Text
                      value={form.lastName}
                      error={!validity.lastName}
                      onChange={setters.lastName}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.patronymic}>
                    Patronymic
                  </Field.Label>
                  <Field.Control error={errors.patronymic}>
                    <Input.Text
                      value={form.patronymic}
                      error={!validity.patronymic}
                      onChange={setters.patronymic}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
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

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.role}>Role</Field.Label>
                  <Field.Control error={errors.role}>
                    <UserRoleSelect value={form.role} onChange={setters.role} />
                  </Field.Control>
                </Field>
              </Form.Col>

              {error && (
                <Form.Col size={Form.Col.sizes.VI}>
                  <Error error={error} />
                </Form.Col>
              )}
            </Form.Container>
          </Card.Body>
          <Card.Footer>
            <Button
              onClick={submit}
              size={Button.sizes.BIG}
              loading={props.isLoading}
              theme={Button.themes.PRIMARY}
              leftIcon={<Icon.icons.Edit width={16} />}
            >
              Update
            </Button>
          </Card.Footer>
        </>
      )}
    </Form>
  );
}
