import { createStore } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import reducers from '../reducers/';
import { User } from '../actions';

// create a makeStore function
const makeStore: MakeStore<User> = (context: Context) => createStore(reducers);

// export an assembled wrapper
export const wrapper = createWrapper<User>(makeStore, { debug: true });
