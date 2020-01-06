/* eslint-disable sort-keys */
import { AUTH } from 'constants/actions'
import { delay } from 'helper'

const notAnActualDatabase = [
  {
    username: 'kula',
    password: 'admin', // very secure
    isAdmin: true
  },
  {
    username: 'melani',
    password: 'admin', // source:
    isAdmin: true
  },
  {
    username: 'matko',
    password: 'test', // "dude, trust me"
    isAdmin: false
  }
]

const inProgress = {
  type: AUTH.IN_PROGRESS,
  data: {}
}

const loginSuccess = data => {
  localStorage['auth'] = data

  return {
    type: AUTH.SUCCESS,
    data
  }
}

const loginFailed = {
  type: AUTH.FAILED,
  error: 'email or password incorrect'
}

export const login = async (dispatch, data) => {
  // do fake login kek
  // dispatch in progress first

  dispatch(inProgress)
  const res = await delay(4000)
    .then(() =>
      notAnActualDatabase.find(el => el.username === data.username && el.password === data.password))

  if (res) { // found, yay
    dispatch(loginSuccess(res))

    return true
  }

  dispatch(loginFailed)

  return false
}
