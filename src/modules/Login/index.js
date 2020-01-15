import React, { useState, useEffect } from 'react'
import { navigate } from 'gatsby'
// import PropTypes from 'prop-types'
import { errors } from 'constants/errors'
import { ExecuteOnRef } from 'helper'
import get from 'lodash.get'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import FlatButton from 'components/FlatButton'
import { login, loginFail } from 'actions/auth'
import { useStore } from 'store'
import Spinner from 'components/Spinner'

import './style.module.scss'

const LoginPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { store, dispatch } = useStore()

  const buttonRef = React.createRef()

  useEffect(() => {
    if (get(store, 'auth.status')) {
      navigate('/')
    }
  }, [store.auth.status])

  return (
    <div styleName='root'>
      <div styleName='main-container' >
        <div styleName='logo'>
          <Logo />
          <p>&lt;</p>
          <Typewriter
            options={{
              autoStart: true,
              delay: 400,
              strings: 'Codejar',
              wrapperClassName: 'typewriter'
            }} />
          <p>/&gt;</p>
        </div>

        {store.error && <p styleName='error'>{store.error}</p>}

        <h2>Employee login:</h2>
        <input disabled={get(store, 'auth.inProgress')}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={e => e.key.toLowerCase() === 'enter' && ExecuteOnRef(buttonRef, 'click')}
          placeholder='Email'/>
        <input disabled={get(store, 'auth.inProgress')}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={e => e.key.toLowerCase() === 'enter' && ExecuteOnRef(buttonRef, 'click')}
          placeholder='Password'
          type='password'/>
        <FlatButton disabled={get(store, 'auth.inProgress')}
          onClick={async () => {
            const data = {
              password: password,
              username: email
            }

            if (!password || !email) {
              return dispatch(loginFail(errors['AUTH.EMPTY_INPUT']))
            }

            await dispatch(login(data))
          }}
          ref={buttonRef}
          styleProp='login'
          type='submit'>
          {
            get(store, 'auth.inProgress')
              ? <Spinner />
              : <span>Login</span>
          }
        </FlatButton>
      </div>
    </div>
  )
}

export default LoginPage
