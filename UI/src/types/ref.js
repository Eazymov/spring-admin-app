/* @flow strict */

export type ObjectRef<T> = {
  current: T,
  ...
};

export type CallbackRef<T> = (value: T) => mixed;

export type Ref<T> = ObjectRef<T> | CallbackRef<T>;
