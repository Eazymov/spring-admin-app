/* @flow strict */
import * as React from 'react';
import { Link } from 'react-router-dom';

import { API } from '../../API';
import { routes } from '../../routes';
import { tableConfig } from './tableConfig';
import { usePending } from '../../lib/hooks';
import { Icon, Card, Table, Button } from '../../controls';

type Props = {||};

export function Users(props: Props) {
  const [users, setUsers] = React.useState([]);
  const [loadUsers, isLoading] = usePending(API.user.getUsers);

  React.useEffect(() => {
    loadUsers().then(setUsers);
  }, [loadUsers]);

  return (
    <>
      <Link to={routes.user.create.path}>
        <Button
          theme={Button.themes.PRIMARY}
          leftIcon={<Icon.icons.Add width={14} />}
        >
          Add
        </Button>
      </Link>
      <br />
      <Card>
        <Card.Header title={`Users (${users.length})`} />
        <Card.Body>
          <Table records={users} config={tableConfig} isLoading={isLoading} />
        </Card.Body>
      </Card>
    </>
  );
}
