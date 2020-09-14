import { ActionTypes } from './type';

export interface User {
  id: number;
  name: string;
}

export interface SignInAction {
  type: ActionTypes.signIn;
  payload: User;
}

// Action Creator
export const signIn = (user: User): SignInAction => {
  return {
    type: ActionTypes.signIn,
    payload: user,
  };
};
