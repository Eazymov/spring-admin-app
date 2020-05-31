/* @flow strict */
import { isNull } from '../../is';
import { getKeys } from '../../object';
import type { Validator, Validators, ValidityState } from './types';

export const defaultValidators = {};

function defaultValidator() {
  return null;
}

export function defaultChangeHandler<F: { ... }, K: $Keys<F>>(
  field: K,
  form: F,
): F {
  return form;
}

function getInitialValidityState<F: { ... }>(): ValidityState<F> {
  return {
    errors: {},
    validity: {},
    required: {},
    isValid: true,
  };
}

export function getValidityState<F: { ... }>(
  form: F,
  isSubmitted: boolean,
  validators: Validators<F>,
): ValidityState<F> {
  const fields = getKeys(form);
  const initial = getInitialValidityState();

  return fields.reduce(<K: $Keys<F>>(acc, field: K) => {
    type V = $ElementType<F, K>;

    const value: V = form[field];
    const validator: Validator<F, V> = validators[field] ?? defaultValidator;
    const validationResult = validator(value, form);

    acc.validity[field] = true;
    acc.required[field] = false;
    acc.errors[field] = undefined;

    if (isNull(validationResult)) {
      return acc;
    }

    const { isValid, errorText, isRequired = true } = validationResult;

    if (isSubmitted) {
      if (!isValid) {
        acc.errors[field] = errorText;
      }

      acc.validity[field] = isValid;
    }

    acc.required[field] = isRequired;
    acc.isValid = acc.isValid && isValid;

    return acc;
  }, initial);
}
