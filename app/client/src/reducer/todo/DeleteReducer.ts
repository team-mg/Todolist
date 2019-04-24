import { TodoData } from '../../data/Todo';
import {Action} from '../../action/TodoAction';
import ActionTypes from '../../action/ActionTypes';


export default function DeleteReducer(state: any, action: Action):any {
    if (action.type !== ActionTypes.DELETE) {
        return state;
    }
    let index = state.todos.findIndex((todo:TodoData) => todo.id === action.payload.id);
    let todos = state.todos.slice();
    todos.splice(index, 1);
    return Object.assign({}, state, {todos});
}