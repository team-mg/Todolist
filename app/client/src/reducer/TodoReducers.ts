import {combineReducers} from 'redux';
import AddReducer from './todo/AddReducer';
import DeleteReducer from './todo/DeleteReducer';
import UpdateReducer from './todo/UpdateReducer';

export default combineReducers({AddReducer, DeleteReducer, UpdateReducer});