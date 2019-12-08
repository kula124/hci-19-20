import React, { useState } from 'react'

import { links } from './navigationData'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'

import './style.module.scss'

const Navigation = ({ refs }) => {
  const [sticky, setSticky] = useState(false)
  const [visible, setVisible] = useState(false)

  window.onscroll = () => {
    if (document.documentElement.scrollTop < window.innerHeight + 100) {
      setSticky(false)
    } else {
      setSticky(true)
    }

    if (document.documentElement.scrollHeight >= window.innerHeight) {
      setVisible(true)
    }
  }

  return (
    <div className={sticky ? 'animated slideInDown' : 'animated slideInUp'}
      styleName={sticky ? 'main-container sticky' : 'main-container' }>
      <div styleName='logo'>
        <Logo />
        <p>&lt;</p>
        {visible && <Typewriter
          options={{
            autoStart: true,
            delay: 400,
            strings: 'CodeJar'
          }} />}
        <p>/&gt;</p>
      </div>
      <nav>
        {links.map(el => <li key={el.id}>
          {el.label}
        </li>)}
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  refs: PropTypes.object
}

export default Navigation
