/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { API } from '../../../API';
import { routes } from '../../../routes';
import { User } from '../../../contracts';
import { UserForm } from '../../Users/Form';
import { validators } from '../../Users/Form/validators';
import { useForm, useError, usePending } from '../../../lib/hooks';
import { Flex, Form, Link, Button, Gapped } from '../../../controls';

type Props = {||};

const initialForm = User.getDefault();

function useSubmitHandler(createUser, handleError) {
  const history = useHistory();

  return React.useCallback(
    (form, isValid) => {
      if (!isValid) {
        return;
      }

      createUser(form).then(
        () => history.push(routes.signIn.index.path),
        handleError,
      );
    },
    [history, createUser, handleError],
  );
}

export function SignUpForm(props: Props) {
  const [error, handleError] = useError();
  const [createUser, isCreating] = usePending(API.user.signUp);
  const onSubmit = useSubmitHandler(createUser, handleError);

  const {
    form,
    errors,
    submit,
    setters,
    validity,
    required,
    createSetter,
  } = useForm(initialForm, { onSubmit, validators });

  return (
    <Gapped gap={20} vertical className={styles.SignUpForm}>
      <Flex justify={Flex.justify.CENTER}>
        <Form.Title>Sign Up</Form.Title>
      </Flex>

      <UserForm
        form={form}
        singleColumn
        error={error}
        errors={errors}
        setters={setters}
        validity={validity}
        required={required}
        createSetter={createSetter}
      />

      <span className={styles.text}>
        Already have an account?&nbsp;
        <Link to={routes.signIn.index.path}>Sign in</Link>
      </span>

      <Flex justify={Flex.justify.CENTER}>
        <Button
          onClick={submit}
          loading={isCreating}
          size={Button.sizes.BIG}
          theme={Button.themes.PRIMARY}
        >
          Submit
        </Button>
      </Flex>
    </Gapped>
  );
}
