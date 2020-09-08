import { createStore } from 'redux';
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper';
import reducers from '../reducers';

// create a makeStore function
const makeStore: MakeStore<any> = (context: Context) => createStore(reducers);

// export an assembled wrapper
export const wrapper = createWrapper<any>(makeStore, { debug: true });
