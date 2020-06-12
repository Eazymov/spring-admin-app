/* @flow strict */
import styles from './styles.module.scss';

import * as React from 'react';
import { Link } from 'react-router-dom';

import { routes } from '../../routes';
import { CN } from '../../lib/string';
import { Storage } from '../../lib/Storage';
import { Dropdown, Icon } from '../../controls';
import { useCurrentUser } from '../../store/user';

type Props = {|
  className?: string,
|};

const logoutIconNode = <Icon.icons.Logout className={styles.icon} />;
const userIconNode = <Icon.icons.UserLocked className={styles.icon} />;

function logout() {
  Storage.removeToken();
  document.location.reload();
}

export function UserBar(props: Props) {
  const [currentUser] = useCurrentUser();
  const className = CN(styles.UserBar, props.className);
  const label = `User: ${currentUser.firstName} ${currentUser.lastName}`;

  return (
    <Dropdown label={label} className={className}>
      {({ blur }) => (
        <Dropdown.Padding onClick={blur}>
          <Link to={routes.account.index.path}>
            <Dropdown.Item icon={userIconNode}>My Profile</Dropdown.Item>
          </Link>
          <Dropdown.Item icon={logoutIconNode} onClick={logout}>
            Logout
          </Dropdown.Item>
        </Dropdown.Padding>
      )}
    </Dropdown>
  );
}
