/* @flow strict */
import { type $Value, createEnum } from '../../lib/Enum';

const rolesConfig = {
  ADMIN: {
    label: ('Admin': 'Admin'),
    value: ('ADMIN': 'ADMIN'),
  },
  STANDARD: {
    label: ('Standard': 'Standard'),
    value: ('STANDARD': 'STANDARD'),
  },
  SUPER_ADMIN: {
    label: ('Super Admin': 'Super Admin'),
    value: ('SUPER_ADMIN': 'SUPER_ADMIN'),
  },
};

type RolesConfig = typeof rolesConfig;

export type Role = $Value<RolesConfig>;

export const rolesEnum = createEnum<RolesConfig>(rolesConfig);

rolesEnum.ADMIN.value;
