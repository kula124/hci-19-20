import React from 'react'
// import PropTypes from 'prop-types'

import './style.module.scss'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import FlatButton from 'components/FlatButton'

const LoginPage = props =>
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
      <input placeholder='Email' />
      <input placeholder='Password'/>
      <FlatButton styleProp='login'>
        <span>Login</span>
      </FlatButton>
    </div>
  </div>

export default LoginPage
