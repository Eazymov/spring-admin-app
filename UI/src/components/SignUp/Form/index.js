/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { useHistory } from 'react-router-dom';

import { routes } from '../../../routes';
import { User } from '../../../contracts';
import { isNotNull } from '../../../lib/is';
import { UserForm } from '../../Users/Form';
import { validators } from '../../Users/Form/validators';
import { useForm, useUser, useError } from '../../../lib/hooks';
import { Flex, Form, Link, Error, Button, Gapped } from '../../../controls';

type Props = {||};

const initialForm = User.getDefault();

function useSubmitHandler(createUser, handleError) {
  const history = useHistory();

  return React.useCallback(
    form => {
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
  const { isCreating, createUser, creatingError } = useUser();
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
        errors={errors}
        setters={setters}
        validity={validity}
        required={required}
        error={creatingError}
        createSetter={createSetter}
      />

      <span className={styles.text}>
        Already have an account?&nbsp;
        <Link to={routes.signIn.index.path}>Sign in</Link>
      </span>

      {isNotNull(error) && <Error error={error} />}

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
