import { createStore, applyMiddleware } from 'redux'
import { moviesReducer } from '../reducer/MovieReducer'
import thunk  from 'redux-thunk'

//create store
export const store = createStore(moviesReducer, applyMiddleware(thunk));