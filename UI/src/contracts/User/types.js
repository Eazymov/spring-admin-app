/* @flow stirct */
import { contract } from './contracts';
import type { $ContractType } from '../types';

export type Type = $ContractType<typeof contract>;
