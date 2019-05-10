import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { State, reducer } from '../reducers'



const store = createStore<State, any, any, any>(reducer, applyMiddleware(logger))

export default store