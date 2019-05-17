import {applyMiddleware, combineReducers, createStore} from "redux"
import { createLogger } from 'redux-logger'
import {routerMiddleware, routerReducer} from "react-router-redux"
import createBrowserHistory from 'history/createBrowserHistory'

import users from 'reducers/users/Users'
import todo from 'reducers/todo/Todo'
import posts from 'reducers/posts/Posts'
import thunk from 'redux-thunk';

// its running under a process, then create browser history
const history = createBrowserHistory()

console.log('process.env.NODE_ENV', process.env.NODE_ENV)
const loggerMiddleware = createLogger()

const reducers = combineReducers({
  routing: routerReducer,
  users,
  todo,
  posts
})
const middleware = [
  routerMiddleware(history),
  thunk,
  process.env.NODE_ENV === 'development' && loggerMiddleware
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