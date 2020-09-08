import { createStore } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import authReducer from '../reducers/authReducer';
import { User } from '../actions';

// create a makeStore function
const makeStore: MakeStore<User> = (context: Context) =>
  createStore(authReducer);

// export an assembled wrapper
export const wrapper = createWrapper<User>(makeStore, { debug: true });
