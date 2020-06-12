/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { API } from '../../../API';
import { routes } from '../../../routes';
import { validators } from './validators';
import { isNotNull } from '../../../lib/is';
import { useForm, useError, usePending } from '../../../lib/hooks';
import { Flex, Form, Error, Input, Button, Gapped } from '../../../controls';

type Props = {||};

const { Field } = Form;
const initialForm = {
  username: '',
  password: '',
};

export function LoginForm(props: Props) {
  const history = useHistory();
  const [error, handleError] = useError();
  const [login, isLoading] = usePending(API.user.login);
  const onSubmit = React.useCallback(
    form => {
      login(form).then(() => history.push(routes.root.path), handleError);
    },
    [login, history, handleError],
  );

  const { form, errors, submit, setters, validity, required } = useForm(
    initialForm,
    {
      validators,
      onSubmit,
    },
  );

  return (
    <Gapped gap={20} vertical className={styles.LoginForm}>
      <Flex justify={Flex.justify.CENTER}>
        <Form.Title>Login</Form.Title>
      </Flex>

      <Field>
        <Field.Label required={required.username}>Username</Field.Label>
        <Field.Control error={errors.username}>
          <Input.Text
            value={form.username}
            placeholder="Username"
            error={!validity.username}
            onChange={setters.username}
            autoComplete={Input.autoComplete.USERNAME}
          />
        </Field.Control>
      </Field>

      <Field>
        <Field.Label required={required.password}>Password</Field.Label>
        <Field.Control error={errors.password}>
          <Input.Password
            value={form.password}
            placeholder="Password"
            error={!validity.password}
            onChange={setters.password}
            autoComplete={Input.autoComplete.CURRENT_PASSWORD}
          />
        </Field.Control>
      </Field>

      {isNotNull(error) && <Error error={error} />}

      <Flex justify={Flex.justify.CENTER}>
        <Button
          onClick={submit}
          loading={isLoading}
          size={Button.sizes.BIG}
          theme={Button.themes.PRIMARY}
        >
          Submit
        </Button>
      </Flex>
    </Gapped>
  );
}
