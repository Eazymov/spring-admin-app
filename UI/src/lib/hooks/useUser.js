/* @flow strict */
import * as React from 'react';

import { API } from '../../API';
import { useState } from './useState';
import { useError } from './useError';
import { usePending } from './usePending';
import { User } from '../../contracts/User';

export function useUser() {
  const [user, setUser] = useState(null);
  const [loadingError, onLoadingError] = useError();
  const [updatingError, onUpdatingError] = useError();
  const [creatingError, onCreatingError] = useError();
  const [load, isLoading] = usePending(API.user.getById);
  const [update, isUpdating] = usePending(API.user.update);
  const [createClient, isCreating] = usePending(API.user.create);

  const loadUser = React.useCallback(
    (id: string) => load(id).then(setUser).catch(onLoadingError),
    [load, onLoadingError],
  );

  const createUser = React.useCallback(
    (newUser: User.Default) =>
      createClient(newUser).then(setUser).catch(onCreatingError),
    [createClient, onCreatingError],
  );

  const updateUser = React.useCallback(
    (nextUser: User.Type) =>
      update(nextUser).then(setUser).catch(onUpdatingError),
    [update, onUpdatingError],
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
