/* @flow strict */
import styles from "./styles.module.scss";

import React from "react";

export function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  return (
    <div className={styles.App}>
      {users.map((user) => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </div>
  );
}
