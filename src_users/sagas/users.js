import { takeLatest, put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import {
  FETCH_USERS_REQUEST,
  FETCH_USER_REQUEST,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from '../constants'
import { usersActions } from '../actions'
import { usersApi } from '../api'

export function* fetchUsers(action) {
  try {
    const users = yield call(usersApi.getUsers)
    yield put(usersActions.setUsers(users))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

export function* fetchUser(action) {
  try {
    const user = yield call(usersApi.getUser, action.payload.id)
    yield put(usersActions.setUser(user))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

export function* createUser(action) {
  try {
    const user = yield call(usersApi.createUser, action.payload.user)
    yield put(usersActions.addUser(user))
    yield put(push('/'))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

export function* updateUser(action) {
  try {
    const { id, changes } = action.payload
    const user = yield call(usersApi.updateUser, id, changes)
    yield put(usersActions.updateUser(user))
    yield put(push('/'))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

export function* deleteUser(action) {
  try {
    yield call(usersApi.deleteUser, action.payload.id)
    yield put(usersActions.deleteUser(action.payload.id))
  } catch (e) {
    console.error(`${action.type} failed: ${e.message}`)
  }
}

export default {
  watchFetchUsers,
  watchFetchUser,
  watchCreateUser,
  watchUpdateUser,
  watchDeleteUser
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS_REQUEST, fetchUsers)
}

export function* watchFetchUser() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser)
}

export function* watchCreateUser() {
  yield takeLatest(CREATE_USER_REQUEST, createUser)
}

export function* watchUpdateUser() {
  yield takeLatest(UPDATE_USER_REQUEST, updateUser)
}

export function* watchDeleteUser() {
  yield takeLatest(DELETE_USER_REQUEST, deleteUser)
}