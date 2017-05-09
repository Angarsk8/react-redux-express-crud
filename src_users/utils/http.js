import fetch from 'isomorphic-fetch'
import { polyfill } from 'es6-promise'

const host =
  process.env.NODE_ENV === 'production'
    ? window.location.host
    : 'localhost:8080'

function buildHeaders(optionalHeaders = {}) {
  return new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    ...optionalHeaders
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const apiURL = `http://${host}/api`

export async function httpGet(url) {
  const response = await fetch(url, {
    headers: buildHeaders()
  })

  return await checkStatus(response).json()
}

export async function httpPost(url, data) {
  const body = JSON.stringify(data)
  const response = await fetch(url, {
    method: 'POST',
    headers: buildHeaders(),
    body: body
  })

  return await checkStatus(response).json()
}

export async function httpDelete(url) {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: buildHeaders()
  })

  return await checkStatus(response).json()
}

export async function httpUpdate(url, data) {
  const body = JSON.stringify(data)
  const response = await fetch(url, {
    method: 'PUT',
    headers: buildHeaders(),
    body: body
  })

  return await checkStatus(response).json()
}
