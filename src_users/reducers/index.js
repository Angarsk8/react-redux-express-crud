import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import users, * as usersSelectors from "./users"

const rootReducer = combineReducers({
  routing: routerReducer,
  users: users
})

export default rootReducer

export function getAllUsers({ users }) {
  return usersSelectors.getAllUsers(users)
}

export function getCurrentUser({ users }) {
  return usersSelectors.getCurrentUser(users)
}