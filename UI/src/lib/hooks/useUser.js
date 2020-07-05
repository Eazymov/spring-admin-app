/* @flow strict */
import * as React from 'react';

import { API } from '../../API';
import { useState } from './useState';
import { useError } from './useError';
import { usePending } from './usePending';
import { User } from '../../contracts/User';
import { useCurrentUser } from '../../store/user';

export function useUser() {
  const [user, setUser] = useState(null);
  const [loadingError, onLoadingError] = useError();
  const [updatingError, onUpdatingError] = useError();
  const [creatingError, onCreatingError] = useError();
  const [get, isLoading] = usePending(API.user.getById);
  const [update, isUpdating] = usePending(API.user.update);
  const [create, isCreating] = usePending(API.user.create);
  const [currentUser, setCurrentUser] = useCurrentUser();
  const currentUserId = currentUser.id;

  const loadUser = React.useCallback(
    (id: string) => get(id).then(setUser, onLoadingError),
    [get, onLoadingError],
  );

  const createUser = React.useCallback(
    (newUser: User.Default) => create(newUser).then(setUser, onCreatingError),
    [create, onCreatingError],
  );

  const updateUser = React.useCallback(
    (nextUser: User.Type) =>
      update(nextUser).then(updated => {
        if (updated.id === currentUserId) {
          setCurrentUser(updated);
        }

        return setUser(updated);
      }, onUpdatingError),
    [update, currentUserId, setCurrentUser, onUpdatingError],
  );

  return {
    user,

    loadUser,
    isLoading,
    loadingError,

    updateUser,
    isUpdating,
    updatingError,

    createUser,
    isCreating,
    creatingError,
  };
}
