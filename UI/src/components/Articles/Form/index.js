/* @flow strict */
import * as React from 'react';

import { validators } from './validators';
import { Article } from '../../../contracts';
import { BusinessError } from '../../../lib/error';
import { Form, Card, Icon, Error, Input, Button } from '../../../controls';

type Props<F> = {|
  initialForm: F,
  isLoading: boolean,
  error: null | BusinessError,
  onSubmit: (form: F, isValid: boolean) => mixed,
|};

const { Field } = Form;

export function ArticleForm<F: Article.Type | Article.Default>(
  props: Props<F>,
) {
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
                  <Field.Label required={required.title}>Title</Field.Label>
                  <Field.Control error={errors.title}>
                    <Input.Text
                      value={form.title}
                      error={!validity.title}
                      onChange={setters.title}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.description}>
                    Description
                  </Field.Label>
                  <Field.Control error={errors.description}>
                    <Input.Text
                      value={form.description}
                      error={!validity.description}
                      onChange={createSetter('description')}
                    />
                  </Field.Control>
                </Field>
              </Form.Col>

              <Form.Col size={Form.Col.sizes.VI}>
                <Field>
                  <Field.Label required={required.content}>Content</Field.Label>
                  <Field.Control error={errors.content}>
                    <Input.Text
                      value={form.content}
                      error={!validity.content}
                      onChange={setters.content}
                    />
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
