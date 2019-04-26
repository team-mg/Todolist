import TodoReducers from '../reducer/TodoReducers';
import { createStore, Store } from 'redux';

const store: Store = createStore(TodoReducers);
console.log(store.getState());
export default store;