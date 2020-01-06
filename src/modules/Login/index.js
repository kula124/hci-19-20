import React, { useState } from 'react'
import { navigateTo } from 'gatsby'
// import PropTypes from 'prop-types'

import './style.module.scss'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import FlatButton from 'components/FlatButton'
import { login } from 'actions/auth'
import { useStore } from 'store'
import Spinner from 'components/Spinner'

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
        <h2>Employee login:</h2>
        <input onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'/>
        <input onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          type='password'/>
        <FlatButton onClick={async () => {
          const data = {
            password: password,
            username: email
          }

          const cb = (await login(dispatch, data)) ? () => navigateTo('/') : () => {}

          cb()
        }}
        styleProp='login'>
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
