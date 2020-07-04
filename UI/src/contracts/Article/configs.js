/* @flow strict */
import * as t from 'typed-contracts';

import { Base } from '../Base';

export const config = {
  ...Base.config,
  title: t.string,
  content: t.string,
  description: t.string,
};

export const defaultConfig = {
  ...Base.defaultConfig,
  title: t.string,
  content: t.string,
  description: t.string,
};
