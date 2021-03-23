/** @format */

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
//  && window.__REDUX_DEVTOOLS_EXTENSION__()
const composeEnhence =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_
    : compose

const configStore = () => {
  const middlewares = [thunk]
  const enhencers = [applyMiddleware(...middlewares)]
  const store = createStore(rootReducer, composeEnhence(...enhencers))
  return store
}

export default configStore
