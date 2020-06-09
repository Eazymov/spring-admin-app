/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { API } from '../../../API';
import { validators } from './validators';
import { isNotNull } from '../../../lib/is';
import { useForm } from '../../../lib/hooks';
import { formatError } from '../../../lib/error';
import { useLoggedInUser } from '../../../store/user';
import { Flex, Form, Input, Button, Gapped } from '../../../controls';

type Props = {||};

const { Field } = Form;
const initialForm = {
  username: '',
  password: '',
};

const routes = {
  home: {
    index: '',
  },
};

function useError() {
  const [error, setError] = React.useState(null);

  const handleError = React.useCallback((thrown: mixed) => {
    const err = formatError(thrown);

    setError(err);
  }, []);

  return [error, handleError];
}

export function LoginForm(props: Props) {
  const history = useHistory();
  const [, setUser] = useLoggedInUser();
  const [error, handleError] = useError();
  const onSubmit = React.useCallback(
    form => {
      API.user
        .login(form)
        .then(() => API.user.getCurrent())
        .then(setUser)
        .then(() => history.push(routes.home.index))
        .catch(handleError);
    },
    [history, setUser, handleError],
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

      {isNotNull(error) && <div>{error.message}</div>}

      <Flex justify={Flex.justify.CENTER}>
        <Button
          onClick={submit}
          size={Button.sizes.BIG}
          theme={Button.themes.PRIMARY}
        >
          Submit
        </Button>
      </Flex>
    </Gapped>
  );
}
