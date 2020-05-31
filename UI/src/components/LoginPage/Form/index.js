/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';

import { Form, Input, Button, Gapped } from '../../../controls';

type Props = {||};

const { Field } = Form;

export function LoginForm(props: Props) {
  return (
    <Gapped gap={20} vertical className={styles.LoginForm}>
      <Form.Title>Login</Form.Title>

      <Field>
        <Field.Label>Username</Field.Label>
        <Field.Control>
          <Input.Text
            value=""
            placeholder="Username"
            autoComplete={Input.autoComplete.USERNAME}
          />
        </Field.Control>
      </Field>

      <Field>
        <Field.Label>Password</Field.Label>
        <Field.Control>
          <Input.Password
            value=""
            placeholder="Password"
            autoComplete={Input.autoComplete.CURRENT_PASSWORD}
          />
        </Field.Control>
      </Field>

      <Button size={Button.sizes.BIG} theme={Button.themes.PRIMARY}>
        Submit
      </Button>
    </Gapped>
  );
}
