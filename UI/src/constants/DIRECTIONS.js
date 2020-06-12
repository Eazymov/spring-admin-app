/* @flow strict */

export const DIRECTIONS = {
  ASC: ('asc': 'asc'),
  DESC: ('desc': 'desc'),
};

export type Direction = $Values<typeof DIRECTIONS>;
