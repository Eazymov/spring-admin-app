/* @flow strict */
import * as React from 'react';

import { Col } from './Col';
import { Field } from './Field';
import { Title } from './Title';
import { Container } from './Container';
import { type Config, type FormProps, useForm } from '../../lib/hooks/useForm';

type Props<F> = {|
  ...$Exact<Config<F>>,
  initialForm: F,
  children: (childProps: FormProps<F>) => React.Node,
|};

export function Form<F: { ... }>(props: Props<F>) {
  const { children, initialForm, ...config } = props;

  return props.children(useForm(initialForm, config));
}

Form.Col = Col;
Form.Field = Field;
Form.Title = Title;
Form.Container = Container;
