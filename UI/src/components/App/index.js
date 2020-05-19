/* @flow strict */
import styles from './styles.module.scss';

import React from 'react';

import { v4 } from 'uuid';

type Props = {||};

export function App(props: Props) {
  return (
    <div className={styles.App}>
      <button
        type="button"
        onClick={() => {
          fetch('http://localhost:8080/users')
            .then(res => res.json())
            .then(users => users[0].id)
            .then(id =>
              fetch('http://localhost:8080/users', {
                method: 'POST',
                body: JSON.stringify({
                  id,
                  firstName: 'Edward',
                  lastName: 'Troshin',
                  patronymic: 'Yurievich',
                  role: 'SuperAdmin',
                  createdOn: new Date().toString(),
                  updatedOn: new Date().toString(),
                  createdBy: null,
                  updatedBy: null,
                }),
                headers: {
                  'Content-Type': 'application/json',
                },
              }),
            )
            .then(res => res.json())
            .then(console.log);
        }}
      >
        Click Me!
      </button>
    </div>
  );
}
