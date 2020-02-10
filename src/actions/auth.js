/* eslint-disable sort-keys */
import { AUTH } from 'constants/actions'
import { delay } from 'helper'
import { errors } from 'constants/errors'
import ls from 'local-storage'

const notAnActualDatabase = [
  {
    username: 'kula',
    password: 'admin', // very secure
    isAdmin: true,
    id: 1
  },
  {
    username: 'melani',
    password: 'admin', // source:
    isAdmin: true,
    id: 2
  }
]

const inProgress = () => ({
  type: AUTH.IN_PROGRESS,
  data: {}
})

const loginSuccess = data => {
  ls.set('auth', JSON.stringify(data))

  return {
    type: AUTH.SUCCESS,
    data
  }
}

const logoutSuccess = data => {
  return {
    type: AUTH.LOGOUT,
    data
  }
}

const loginFailed = message => ({
  type: AUTH.FAILED,
  error: message
})

/// ///////////////////////////

export const loginFail = message => dispatch =>
  dispatch(loginFailed(message))

export const logout = () => dispatch => ls.remove('auth') || dispatch(logoutSuccess())

export const login = data => async dispatch => {
  // do fake login kek
  // dispatch in progress first

  dispatch(inProgress())
  const res = await delay(4000)
    .then(() =>
      notAnActualDatabase.find(el => el.username === data.username && el.password === data.password))

  if (res) { // found, yay
    dispatch(loginSuccess(res))

    return true
  }

  dispatch(loginFailed(errors['AUTH.FAILED']))

  return false
}
