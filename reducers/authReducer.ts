import { User, ActionTypes } from '../actions';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

export default (state: User = { id: 0, name: '' }, action: AnyAction): User => {
  console.log('In here');
  console.log(state);
  console.log(action.payload);
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case ActionTypes.signIn:
      return { ...state, id: action.payload.id, name: action.payload.name };
    default:
      return state;
  }
};
