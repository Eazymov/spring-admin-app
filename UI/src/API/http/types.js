/* @flow strict */
import type { HttpMethod } from '../../constants/HTTP_METHODS';

export type MethodConfig = {|
  data?: mixed,
|};

export type Config = {|
  ...$Exact<MethodConfig>,
  method: HttpMethod,
|};
