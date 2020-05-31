/* @flow strict */
import {
  useState,
  useSubmit,
  useSetters,
  useTouchReset,
  useFormReplace,
  useValueSetter,
  useSetterCreator,
} from './hooks';
import { noop } from '../../func';
import type { Config, FormProps } from './types';
import { defaultValidators, defaultChangeHandler } from './utils';

export function useForm<F: { ... }>(
  initialForm: F,
  config: Config<F>,
): FormProps<F> {
  const {
    onSubmit = noop,
    validators = defaultValidators,
    changeHandler = defaultChangeHandler,
  } = config;
  const [state, setState] = useState(initialForm, validators);
  const setValue = useValueSetter(setState, changeHandler);
  const setters = useSetters(state.form, setValue);
  const submit = useSubmit(onSubmit, setState);
  const replaceForm = useFormReplace(setState);
  const resetTouch = useTouchReset(setState);
  const createSetter = useSetterCreator(setValue);

  return {
    ...state,
    submit,
    setters,
    resetTouch,
    replaceForm,
    createSetter,
  };
}

export * from './types';
