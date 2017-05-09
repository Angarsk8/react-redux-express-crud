import { combineReducers } from 'redux'
import {
  FETCH_USERS_SUCCESS,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
 } from '../constants'

export function users(state = [], { type, payload }) {
  switch (type) {
    case FETCH_USERS_SUCCESS:
      return payload.users
    case CREATE_USER_SUCCESS:
      return [...state, payload.user]
    case UPDATE_USER_SUCCESS:
      return state.map(user => (
        user._id === payload.user._id ? payload.user : user
      ))
    case DELETE_USER_SUCCESS:
      return state.filter(user => user._id !== payload.id)
    default:
      return state
  }
}

export function currentUser(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_USER_SUCCESS:
      return payload.user
    default:
      return state
  }
}

export default combineReducers({
  users,
  currentUser
})

export function getAllUsers({ users }) {
  return users
    .filter(user => user.status)
    .map(user => ({
      ...user,
      id: user._id
    }))
}

export function getCurrentUser({ currentUser }) {
  return {
    ...currentUser,
    id: currentUser._id
  }
}