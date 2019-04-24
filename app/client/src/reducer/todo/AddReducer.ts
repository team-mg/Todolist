import {Action} from '../../action/TodoAction';
import ActionTypes from '../../action/ActionTypes';

export default function AddReducer(state: any, action: Action):any {
    if (action.type !== ActionTypes.ADD) {
        return state;
    }
    let todos = state.todos.slice().push(action.payload.todo);
    return Object.assign({}, state, {todos});
}