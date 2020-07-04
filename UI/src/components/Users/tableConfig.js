/* @flow strict */
import * as React from 'react';

import { routes } from '../../routes';
import { User } from '../../contracts';
import { Icon, Link, Button } from '../../controls';

export const tableConfig = {
  columns: [
    {
      key: 'username',
      name: 'Username',
      render: (user: User.Type) => (
        <Link to={routes.user.read.path(user.id)}>{user.username}</Link>
      ),
    },
    {
      key: 'email',
      name: 'Email',
      render: (user: User.Type) => user.email,
    },
    {
      key: 'role',
      name: 'Role',
      render: (user: User.Type) => User.rolesEnum.getByValue(user.role).label,
    },
    {
      key: 'createdBy',
      name: 'Created by',
      render: (user: User.Type) => user.createdBy.username,
    },
    {
      key: 'updatedBy',
      name: 'Updated by',
      render: (user: User.Type) => user.updatedBy.username,
    },
    {
      key: 'actions',
      name: null,
      width: 130,
      render: (user: User.Type) => (
        <Link to={routes.user.update.path(user.id)}>
          <Button
            theme={Button.themes.PRIMARY}
            leftIcon={<Icon.icons.Edit width={16} />}
          >
            Update
          </Button>
        </Link>
      ),
    },
  ],
};
