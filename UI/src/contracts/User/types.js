/* @flow stirct */
import type { $ValidatorType } from '../types';
import { validate, validateDefault } from './validators';

export type Type = $ValidatorType<typeof validate>;
export type Default = $ValidatorType<typeof validateDefault>;
