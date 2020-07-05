/* @flow strict */
import invariant from 'invariant';

import { isNotNull } from '../../lib/is';
import { type State, userStore } from './store';
import { rolesEnum } from '../../contracts/User';
import { useStore, useGetter } from '../../lib/store';

export function useLoggedInUser() {
  return useStore<State>(userStore);
}

export function useCurrentUser() {
  const [user, setUser] = useStore<State>(userStore);

  invariant(isNotNull(user), 'Unexpected null');

  return [user, setUser];
}

function isAdminGetter(state) {
  return [rolesEnum.ADMIN.value, rolesEnum.SUPER_ADMIN.value].includes(
    state?.role,
  );
}

export function useIsAdmin() {
  return useGetter(userStore, isAdminGetter);
}
