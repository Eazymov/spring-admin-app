/* @flow strict */

export type Errors<F: { ... }> = $ObjMap<F, () => void | string>;

declare function required<T>(v: ?T): void | boolean;
// eslint-disable-next-line no-redeclare
declare function required<T>(v: $NonMaybeType<T>): boolean;

export type Required<F: { ... }> = $ObjMap<
  F,
  <V>(V) => $Call<typeof required, V>,
>;

export type Validity<F: { ... }> = Required<F>;

type Setter = ((value: void) => void) &
  ((value: mixed) => (value: mixed) => void);

export type Setters<F: { ... }> = $ObjMapi<
  F,
  <K, V>(key: K, value: V) => $Call<Setter, V>,
>;

export type ValidatorResult = {|
  isValid: boolean,
  errorText: string,
  isRequired?: boolean,
|};

export type ValidationResult<F: { ... }> = {|
  ...$Exact<ValidatorResult>,
  field: $Keys<F>,
|};

export type ChangeHandler<F: { ... }> = (field: $Keys<F>, form: F) => F;

export type Validator<F: { ... }, V> = (
  value: V,
  form: F,
) => null | ValidatorResult;

export type Validators<F: { ... }> = $Shape<
  $ObjMap<F, <V>(V) => Validator<F, V>>,
>;

export type OnSubmit<F: { ... }> = (
  form: F,
  isValid: boolean,
  errors: Errors<F>,
) => mixed;

export type Config<F: { ... }> = {|
  onSubmit?: OnSubmit<F>,
  validators?: Validators<F>,
  changeHandler?: ChangeHandler<F>,
|};

export type ValidityState<F: { ... }> = {|
  isValid: boolean,
  errors: Errors<F>,
  validity: Validity<F>,
  required: Required<F>,
|};

export type State<F: { ... }> = {|
  ...$Exact<ValidityState<F>>,
  form: F,
  isTouched: boolean,
  isSubmitted: boolean,
|};

export type SetterCreator<F: { ... }> = (
  field: $Keys<F>,
) => (value: mixed) => void;

export type FormProps<F: { ... }> = {|
  ...$Exact<ValidityState<F>>,
  form: F,
  isTouched: boolean,
  setters: Setters<F>,
  isSubmitted: boolean,
  createSetter: SetterCreator<F>,
  resetTouch: () => void,
  replaceForm: (form: F) => void,
  submit: () => Promise<State<F>>,
|};
