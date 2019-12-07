import React from 'react'

import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'

import './style.module.scss'

const Navigation = () => {
  return (
    <div styleName='main-container'>
      <div styleName='logo'>
        <Logo />
        <p>&lt;</p>
        <Typewriter options={{
          autoStart: true,
          strings: 'CodeJar'
        }} />
        <p>/&gt;</p>
      </div>
      <nav>
        <li>Technology</li>
        <li>About</li>
        <li>Contact</li>
        <li>Blog</li>
        <li>Jobs</li>
        <li>Login</li>
      </nav>
    </div>
  )
}

export default Navigation
