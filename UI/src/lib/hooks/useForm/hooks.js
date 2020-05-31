/* @flow strict */
import * as React from 'react';

import { setStateAsync } from '../../react';
import type { SetState } from '../../../types';

import type {
  State,
  Setters,
  OnSubmit,
  Validators,
  SetterCreator,
} from './types';
import { isFunc } from '../../is';
import { getKeys } from '../../object';
import { getValidityState } from './utils';

export function useState<F: { ... }>(
  initialForm: F,
  validators: Validators<F>,
): [State<F>, SetState<State<F>>] {
  const [state, setState] = React.useState(() => {
    const isSubmitted = false;

    return {
      isSubmitted,
      isTouched: false,
      form: initialForm,
      ...getValidityState(initialForm, isSubmitted, validators),
    };
  });

  const setStateProxy = React.useCallback(
    stateGetter =>
      setState(prevState => {
        const nextState = isFunc(stateGetter)
          ? stateGetter(prevState)
          : stateGetter;

        return {
          ...nextState,
          ...getValidityState(
            nextState.form,
            nextState.isSubmitted,
            validators,
          ),
        };
      }),
    [validators],
  );

  return [state, setStateProxy];
}

export function useSubmit<F: { ... }>(
  onSubmit: OnSubmit<F>,
  setState: SetState<State<F>>,
): () => Promise<State<F>> {
  return React.useCallback(() => {
    function updater(prevState) {
      return {
        ...prevState,
        isSubmitted: true,
      };
    }

    function afterUpdate(state) {
      onSubmit(state.form, state.isValid, state.errors);

      return state;
    }

    return setStateAsync(setState, updater).then(afterUpdate);
  }, [setState, onSubmit]);
}

export function useValueSetter<F: { ... }>(
  setState: SetState<State<F>>,
  changeHandler: (field: $Keys<F>, form: F) => F,
) {
  return React.useCallback(
    (field: $Keys<F>, value: mixed) =>
      setState(prevState => {
        const nextForm = changeHandler(field, {
          ...prevState.form,
          [field]: value,
        });

        return {
          ...prevState,
          form: nextForm,
          isTouched: true,
        };
      }),
    [setState, changeHandler],
  );
}

export function useTouchReset<F: { ... }>(setState: SetState<State<F>>) {
  return React.useCallback(
    () =>
      setState(prevState => ({
        ...prevState,
        isTouched: false,
      })),
    [setState],
  );
}

export function useFormReplace<F: { ... }>(
  setState: SetState<State<F>>,
): (form: F) => void {
  return React.useCallback(
    nextForm =>
      setState(prevState => ({
        ...prevState,
        form: nextForm,
      })),
    [setState],
  );
}

export function useSetters<F: { ... }>(
  form: F,
  setValue: (field: $Keys<F>, value: mixed) => mixed,
) {
  const savedSettersRef = React.useRef<Setters<F>>({});

  return React.useMemo(() => {
    const fields = getKeys(form);

    return fields.reduce((acc: Setters<F>, field: $Keys<F>) => {
      const savedSetters = savedSettersRef.current;
      const setter =
        savedSetters[field] ?? (savedSetters[field] = defaultSetter);

      function defaultSetter(nextValue: mixed) {
        return setValue(field, nextValue);
      }

      acc[field] = setter;

      return acc;
    }, {});
  }, [form, setValue]);
}

export function useSetterCreator<F: { ... }>(
  setValue: (field: $Keys<F>, value: mixed) => mixed,
): SetterCreator<F> {
  const settersRef = React.useRef({});

  return React.useCallback(
    (field: $Keys<F>) => {
      const setters = settersRef.current;
      const setter = setters[field] ?? (setters[field] = defaultSetter);

      function defaultSetter(value: mixed) {
        setValue(field, value);
      }

      return setter;
    },
    [setValue],
  );
}
