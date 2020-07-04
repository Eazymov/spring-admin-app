/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { useHistory } from 'react-router-dom';

import {
  Flex,
  Form,
  Link,
  Error,
  Input,
  Button,
  Gapped,
} from '../../../controls';
import { API } from '../../../API';
import { routes } from '../../../routes';
import { validators } from './validators';
import { isNotNull } from '../../../lib/is';
import { useForm, useError, usePending } from '../../../lib/hooks';

type Props = {||};

const { Field } = Form;
const initialForm = {
  username: '',
  password: '',
};

export function SignInForm(props: Props) {
  const history = useHistory();
  const [error, handleError] = useError();
  const [signIn, isSigningIn] = usePending(API.user.signIn);
  const onSubmit = React.useCallback(
    form => {
      signIn(form).then(() => history.push(routes.root.path), handleError);
    },
    [signIn, history, handleError],
  );

  const { form, errors, submit, setters, validity, required } = useForm(
    initialForm,
    {
      validators,
      onSubmit,
    },
  );

  return (
    <Gapped gap={20} vertical className={styles.SignInForm}>
      <Flex justify={Flex.justify.CENTER}>
        <Form.Title>Sign In</Form.Title>
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

      <span className={styles.text}>
        Don&apos;t have an account?&nbsp;
        <Link to={routes.signUp.index.path}>Sign up</Link>
      </span>

      {isNotNull(error) && <Error error={error} />}

      <Flex justify={Flex.justify.CENTER}>
        <Button
          onClick={submit}
          loading={isSigningIn}
          size={Button.sizes.BIG}
          theme={Button.themes.PRIMARY}
        >
          Submit
        </Button>
      </Flex>
    </Gapped>
  );
}
