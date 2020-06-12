/* @flow strict */
import * as React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import { User } from '../../contracts';
import { Icon, Button } from '../../controls';

export const tableConfig = {
  columns: [
    {
      key: 'username',
      name: 'Username',
      sortable: true,
      render: (user: User.Type) => user.username,
    },
    {
      key: 'email',
      name: 'Email',
      sortable: true,
      render: (user: User.Type) => user.email,
    },
    {
      key: 'role',
      name: 'Role',
      sortable: true,
      render: (user: User.Type) => user.role,
    },
    {
      key: 'createdBy',
      name: 'Created by',
      sortable: true,
      render: (user: User.Type) => user.createdBy.username,
    },
    {
      key: 'updatedBy',
      name: 'Updated by',
      sortable: true,
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
