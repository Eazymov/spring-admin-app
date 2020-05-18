/* @flow strict */
import { type $Value, createEnum } from '../../lib/Enum';

const rolesConfig = {
  STANDARD: {
    label: ('Standard': 'Standard'),
    value: 0,
  },
  ADMIN: {
    label: ('Admin': 'Admin'),
    value: 1,
  },
  SUPER_ADMIN: {
    label: ('Super Admin': 'Super Admin'),
    value: 2,
  },
};

type RolesConfig = typeof rolesConfig;

export type Role = $Value<RolesConfig>;

export const rolesEnum = createEnum<RolesConfig>(rolesConfig);
