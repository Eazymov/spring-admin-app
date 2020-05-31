/* @flow strict */
import styles from './styles.module.scss';

import React from 'react';

import { User } from '../../contracts';

type Props = {||};

const endpoint = 'http://localhost:8080/users';

export function App(props: Props) {
  const [users, setUsers] = React.useState<User.Type[]>([]);
  const id = users[0]?.id ?? null;

  React.useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then((data: mixed) =>
        Array.isArray(data) ? data.map(User.validate) : [],
      )
      .then(setUsers);
  }, []);

  return (
    <div className={styles.App}>
      <button
        type="button"
        onClick={() =>
          fetch(endpoint)
            .then(res => res.json())
            .then((data: mixed) =>
              Array.isArray(data) ? data.map(User.validate) : [],
            )
            .then(setUsers)
        }
      >
        Reload
      </button>
      {id !== null && (
        <button
          type="button"
          onClick={() =>
            fetch(endpoint, {
              method: 'POST',
              body: JSON.stringify({
                id,
                firstName: 'Edward',
                lastName: 'Troshin',
                patronymic: 'Yurievich',
                username: 'Eazymov',
                email: 'eazymov@mail.ru',
                password: '1234',
                role: User.rolesEnum.SUPER_ADMIN.value,
                createdOn: new Date().toString(),
                updatedOn: new Date().toString(),
                createdBy: null,
                updatedBy: null,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            })
              .then(res => res.json())
              .then(User.validate)
              .then(user => setUsers(prevUsers => prevUsers.concat(user)))
          }
        >
          Click Me!
        </button>
      )}
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </div>
  );
}
