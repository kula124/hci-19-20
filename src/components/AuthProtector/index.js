import React from 'react'
import { useStore } from 'store'

const AuthProtector = ({ children, ...rest }) => {
  const { store } = useStore()

  if (store['auth']) {
    return React.cloneElement(children, { user: store['auth'], ...rest })
  }

  return null
}

export default AuthProtector
