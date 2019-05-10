import { State } from '../reducers'
import { createSelector } from 'reselect'

const getTodosState = ((state: State) => state.todos)

export const getTodos = createSelector([getTodosState], s => s.todos)