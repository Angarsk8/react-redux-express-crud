import { takeLatest, put, call } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import assert from "assert"
import {
  watchFetchUsers,
  fetchUsers,
  watchFetchUser,
  fetchUser,
  watchCreateUser,
  createUser,
  watchUpdateUser,
  updateUser,
  watchDeleteUser,
  deleteUser
} from '../../src_users/sagas/users'
import {
  FETCH_USERS_REQUEST,
  FETCH_USER_REQUEST,
  CREATE_USER_REQUEST,
  UPDATE_USER_REQUEST,
  DELETE_USER_REQUEST
} from '../../src_users/constants'
import { usersActions } from '../../src_users/actions'
import { usersApi } from '../../src_users/api'

describe('Redux Saga:', () => {
  const testUsers = [
    {_id: '1bc', name: "John", lastName: "Doe", phone: "12345673", status: true},
    {_id: '2bc', name: "Joe", lastName: "Armstrong", phone: "12345674", status: true},
    {_id: '3bc', name: "José", lastName: "Valim", phone: "12345675", status: true}
  ]
  const testUser = {
    _id: '4bc',
    name: "Tj",
    lastName: "Holowaychuk",
    phone: "12345676",
    status: true
  }
  const fetchUsersAction = {type: FETCH_USERS_REQUEST}
  const fetchUserAction  = {type: FETCH_USER_REQUEST, payload: {id: '4bc'}}
  const createUserAction = {type: CREATE_USER_REQUEST, payload: {user: testUser}}
  const updateUserAction = {type: UPDATE_USER_REQUEST, payload: {id: '4bc', changes: testUser}}
  const deleteUserAction = {type: DELETE_USER_REQUEST, payload: {id: '4bc'}}

  it('should spawn a saga to fetch the users', () => {
    const gen = watchFetchUsers()

    assert.deepEqual(
      gen.next().value,
      takeLatest(fetchUsersAction.type, fetchUsers)
    )

    assert.equal(gen.next().done, true)
  })

  it('should fetch users', () => {
    const gen = fetchUsers(fetchUsersAction)

    assert.deepEqual(
      gen.next().value,
      call(usersApi.getUsers)
    )

    assert.deepEqual(
      gen.next(testUsers).value,
      put(usersActions.setUsers(testUsers))
    )

    assert.equal(gen.next().done, true)
  })

  it('should spawn a saga to fetch the current user', () => {
    const gen = watchFetchUser()

    assert.deepEqual(
      gen.next().value,
      takeLatest(fetchUserAction.type, fetchUser)
    )

    assert.equal(gen.next().done, true)
  })

  it('should fetch current user', () => {
    const gen = fetchUser(fetchUserAction)

    assert.deepEqual(
      gen.next().value,
      call(usersApi.getUser, fetchUserAction.payload.id)
    )

    assert.deepEqual(
      gen.next(testUser).value,
      put(usersActions.setUser(testUser))
    )

    assert.equal(gen.next().done, true)
  })

  it('should spawn a saga to create a user', () => {
    const gen = watchCreateUser()

    assert.deepEqual(
      gen.next().value,
      takeLatest(createUserAction.type, createUser)
    )

    assert.equal(gen.next().done, true)
  })

  it('should create a user', () => {
    const gen = createUser(createUserAction)

    assert.deepEqual(
      gen.next().value,
      call(usersApi.createUser, createUserAction.payload.user)
    )

    assert.deepEqual(
      gen.next(testUser).value,
      put(usersActions.addUser(testUser))
    )

    assert.deepEqual(
      gen.next().value,
      put(push('/'))
    )

    assert.equal(gen.next().done, true)
  })

  it('should spawn a saga to update a user', () => {
    const gen = watchUpdateUser(updateUserAction)

    assert.deepEqual(
      gen.next().value,
      takeLatest(updateUserAction.type, updateUser)
    )

    assert.equal(gen.next().done, true)
  })

  it('should update a user', () => {
    const gen = updateUser(updateUserAction)

    assert.deepEqual(
      gen.next().value,
      call(
        usersApi.updateUser,
        updateUserAction.payload.id,
        updateUserAction.payload.changes
      )
    )

    assert.deepEqual(
      gen.next(testUser).value,
      put(usersActions.updateUser(testUser))
    )

    assert.deepEqual(
      gen.next().value,
      put(push('/'))
    )

    assert.equal(gen.next().done, true)
  })

  it('should spawn a saga to delete a user', () => {
    const gen = watchDeleteUser()

    assert.deepEqual(
      gen.next().value,
      takeLatest(deleteUserAction.type, deleteUser)
    )

    assert.equal(gen.next().done, true)
  })

  it('should delete a user', () => {
    const gen = deleteUser(deleteUserAction)

    assert.deepEqual(
      gen.next().value,
      call(usersApi.deleteUser, deleteUserAction.payload.id)
    )

    assert.deepEqual(
      gen.next().value,
      put(usersActions.deleteUser(deleteUserAction.payload.id))
    )

    assert.equal(gen.next().done, true)
  })
})