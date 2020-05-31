/* @flow strict */
import invariant from 'invariant';

import { isNotNull } from '../../lib/is';
import { useStore } from '../../lib/store';
import { type State, userStore } from './store';

export function useLoggedInUser() {
  return useStore<State>(userStore);
}

export function useCurrentUser() {
  const [user, setUser] = useStore<State>(userStore);

  invariant(isNotNull(user), 'Unexpected null');

  return [user, setUser];
}
