import {
  apiURL,
  httpGet,
  httpPost,
  httpUpdate,
  httpDelete
} from '../utils/http'

export default {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}

export function getUsers() {
  return httpGet(`${apiURL}/users`)
}

export function getUser(id) {
  return httpGet(`${apiURL}/users/${id}`)
}

export function createUser(user) {
  return httpPost(`${apiURL}/users`, user)
}

export function updateUser(id, changes) {
  return httpUpdate(`${apiURL}/users/${id}`, changes)
}

export function deleteUser(id) {
  return httpDelete(`${apiURL}/users/${id}`)
}