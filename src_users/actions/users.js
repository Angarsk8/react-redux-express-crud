import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
} from '../constants'

export default {
  fetchUsersRequest,
  setUsers,
  fetchUserRequest,
  setUser,
  createUserRequest,
  addUser,
  updateUserRequest,
  updateUser,
  deleteUserRequest,
  deleteUser,
}

export function fetchUsersRequest() {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export function setUsers(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: {
      users
    }
  }
}

export function fetchUserRequest(id) {
  return {
    type: FETCH_USER_REQUEST,
    payload: {
      id
    }
  }
}

export function setUser(user) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: {
      user
    }
  }
}

export function createUserRequest(user) {
  return {
    type: CREATE_USER_REQUEST,
    payload: {
      user
    }
  }
}

export function addUser(user) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: {
      user
    }
  }
}

export function updateUserRequest(id, changes) {
  return {
    type: UPDATE_USER_REQUEST,
    payload: {
      id,
      changes
    }
  }
}

export function updateUser(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: {
      user
    }
  }
}

export function deleteUserRequest(id) {
  return {
    type: DELETE_USER_REQUEST,
    payload: {
      id
    }
  }
}

export function deleteUser(id) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: {
      id
    }
  }
}