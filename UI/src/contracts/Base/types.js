/* @flow stirct */
import type { $ContractType } from '../types';
import { contract, defaultContract } from './contracts';

export type Type = $ContractType<typeof contract>;
export type Default = $ContractType<typeof defaultContract>;
