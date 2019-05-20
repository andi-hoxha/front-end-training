import {applyMiddleware, combineReducers, createStore} from "redux"
import {routerMiddleware, routerReducer} from "react-router-redux"
import createBrowserHistory from 'history/createBrowserHistory'
import api from 'middleware/Api'

import users from 'reducers/users/Users'
import todo from 'reducers/todo/Todo'
import posts from 'reducers/posts/Posts'

// import { createLogger } from 'redux-logger'
// import thunk from 'redux-thunk';
// const loggerMiddleware = createLogger()

// its running under a process, then create browser history
const history = createBrowserHistory()

console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const reducers = combineReducers({
  routing: routerReducer,
  users,
  todo,
  posts
})

/**
 * Logs all actions and states after they are dispatched.
 */
const internalLogger = store => next => action => {
  console.group(action.type)
  console.log('prev state', store.getState())
  console.info('action', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
const crashReporter = store => next => action => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception at internal crash reporter!', err)
    throw err
  }
}

/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
const internalThunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action)

const middleware = [
  routerMiddleware(history),
  api,
  internalThunk,
  internalLogger,
  crashReporter,
].filter(Boolean)

const store = createStore(reducers, applyMiddleware(...middleware))
/**
 * The browsing history
 */
export {
  history
}
// export const history = syncHistoryWithStore(history, store)
/**
 * The redux store which combines all the reducers
 */
export default store