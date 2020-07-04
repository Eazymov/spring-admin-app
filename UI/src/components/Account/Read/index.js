/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../../routes';
import { isNull } from '../../../lib/is';
import { UserDetails } from '../../Users/Details';
import { useCurrentUser } from '../../../store/user';
import { Icon, Card, Button } from '../../../controls';

type Props = {||};

export function AccountRead(props: Props) {
  const [user] = useCurrentUser();

  if (isNull(user)) {
    return null;
  }

  return (
    <Card className={styles.AccountRead}>
      <Card.Header title="Account">
        <Link to={routes.account.update.path}>
          <Button
            theme={Button.themes.PRIMARY}
            leftIcon={<Icon.icons.Edit width={16} />}
          >
            Update
          </Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <UserDetails user={user} error={null} />
      </Card.Body>
    </Card>
  );
}
