import { TodoData } from '../../data/Todo';
import {Action} from '../../action/TodoAction';
import ActionTypes from '../../action/ActionTypes';


export default function UpdateReducer(state: any, action: Action):any {
    if (action.type !== ActionTypes.UPDATE) {
        return state;
    }
    const index = state.todos.findIndex((todo:TodoData) => todo.id === action.payload.id);
    const todos = state.todos.slice();
    todos[index] = action.payload.content;
    return Object.assign({}, state, {todos});
}