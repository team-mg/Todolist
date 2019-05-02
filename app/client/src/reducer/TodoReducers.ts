import { Action } from '../action/TodoAction';
import ActionTypes from '../action/ActionTypes';
import Todo, { TodoData } from '../data/Todo';

function getID(todos:TodoData[], id:number) {
    return todos.findIndex((todo:TodoData) => todo.id === id);
}
export default function Reducer(state: any = {todos: []}, action: Action):any {
    let todos = state.todos.slice();
    switch(action.type) {
        case ActionTypes.ADD:
            todos.push(action.payload.todo);
            return Object.assign({}, state, {todos});
        case ActionTypes.DELETE:
            todos.splice(getID(state.todos, action.payload.id), 1);
            return Object.assign({}, state, {todos});
        case ActionTypes.UPDATE:
            console.log(JSON.stringify(todos), getID(state.todos, action.payload.id), action.payload);
            const index = getID(state.todos, action.payload.id);
            todos[index] = new Todo(action.payload.content, action.payload.id, todos[index].complete);
            return Object.assign({}, state, {todos});
        default:
            return state;
    }
}
    

// export default combineReducers({AddReducer, DeleteReducer, UpdateReducer});