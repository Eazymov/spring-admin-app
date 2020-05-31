/* @flow strict */
import { User } from '../../contracts';
import { createStore } from '../../lib/store';

export type State = null | User.Type;

const initialState = null;

export const userStore = createStore<State>(initialState);
