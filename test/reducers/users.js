import assert from "assert"
import {
  FETCH_USERS_SUCCESS,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS
} from '../../src_users/constants'
import {
  users,
  currentUser
} from '../../src_users/reducers/users'

describe('Users reducers:', () => {
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

  it('(users) should return the initial state', () => {
    assert.deepEqual(users(undefined, {}), [])
  })

  it('(users) should set users after successful request', () => {
    const action = {
      type: FETCH_USERS_SUCCESS,
      payload: {
        users: testUsers
      }
    }
    assert.deepEqual(users([], action), testUsers)
  })

  it('(users) should add user after successful creation', () => {
    const action = {
      type: CREATE_USER_SUCCESS,
      payload: {
        user: testUser
      }
    }
    assert.deepEqual(users(testUsers, action), [...testUsers, testUser])
  })

  it('(users) should modify user after successful update', () => {
    const usersBeforeUpdate = [...testUsers, testUser]
    const updatedUser = {...testUser, name: 'TJ'}
    const usersAfterUpdate = [...testUsers, updatedUser]
    const action = {
      type: UPDATE_USER_SUCCESS,
      payload: {
        id: updatedUser._id,
        user: updatedUser
      }
    }
    assert.deepEqual(users(usersBeforeUpdate, action), usersAfterUpdate)
  })

  it('(users) should remove user after successful deletion', () => {
    const usersBeforeDelete = [...testUsers, testUser]
    const action = {
      type: DELETE_USER_SUCCESS,
      payload: {
        id: testUser._id
      }
    }
    assert.deepEqual(users(usersBeforeDelete, action), testUsers)
  })

  it('(currentUser) should return the initial state', () => {
    assert.deepEqual(currentUser(undefined, {}), {})
  })

  it('(currentUser) should set current user after successful request', () => {
    const action = {
      type: FETCH_USER_SUCCESS,
      payload: {
        user: testUser
      }
    }
    assert.deepEqual(currentUser({}, action), testUser)
  })
})
