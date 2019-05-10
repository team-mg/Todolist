import Todo from "../models/Todo";
import { Action, ActionTypes } from "../actions/todos";

export interface State {
    todos: Todo[]
}

export const initialState: State = {
    todos: []
}



export function reducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.ADD_TODO: {
            const todo = action.payload.todo

            return {
                ...state,
                todos: [...state.todos, todo]
            }
        }

        case ActionTypes.UPDATE_TODO: {
            const {todoId, text, done} = action.payload

            return {
                ...state,
                todos: state.todos.map(todo => todo.id === todoId ? {...todo, text: text, done: done} : todo)
            }
        }

        case ActionTypes.DELETE_TODO: {
            const { todoId } = action.payload

            const removeIndex: number = state.todos.findIndex(todo => todo.id === todoId)
            const todos: Todo[] = state.todos.splice(removeIndex)

            return {
                ...state,
                todos
            }
        }

        default: {
            return state
        }
    }
}