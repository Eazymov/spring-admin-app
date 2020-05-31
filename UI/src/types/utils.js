/* @flow strict */

export type $Partial<O: { ... }> = $ReadOnly<$Rest<O, { ... }>>;
