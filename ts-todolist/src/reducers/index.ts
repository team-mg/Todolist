import * as fromTodos from './todos'
import { combineReducers } from 'redux'

export interface State {
    todos: fromTodos.State
}

export const initialState: State = {
    todos: fromTodos.initialState
}

export const reducer = combineReducers<State>({
    todos: fromTodos.reducer
})