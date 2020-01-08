import React, { useState } from 'react'
import { navigateTo } from 'gatsby'
// import PropTypes from 'prop-types'
import { errors } from 'constants/errors'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import FlatButton from 'components/FlatButton'
import { login, loginFailed } from 'actions/auth'
import { useStore } from 'store'
import Spinner from 'components/Spinner'

import './style.module.scss'

const LoginPage = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { store, dispatch } = useStore()

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
        <input disabled={store.auth.inProgress}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'/>
        <input disabled={store.auth.inProgress}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'/>
        <FlatButton disabled={store.auth.inProgress}
          onClick={async () => {
            const data = {
              password: password,
              username: email
            }

            if (!password || !email) {
              return dispatch(loginFailed(errors['AUTH.EMPTY_INPUT']))
            }

            const cb = (await login(dispatch, data)) ? () => navigateTo('/') : () => {}

            cb()
          }}
          styleProp='login'
          type='submit'>
          {
            store.auth.inProgress
              ? <Spinner />
              : <span>Login</span>
          }
        </FlatButton>
      </div>
    </div>
  )
}

export default LoginPage
