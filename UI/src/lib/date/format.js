/* @flow strict */
import formatDate from 'date-fns/format';

const DEFAULT_FORMAT = 'dd/MM/yyyy';

export function format(value: string) {
  const date = new Date(value);

  return formatDate(date, DEFAULT_FORMAT);
}
