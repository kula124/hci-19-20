import React, { useState } from 'react'

import { ScrollToRef } from 'helper'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'
import { useStore } from 'store'

import './style.module.scss'

const isElementVisible = (element, nav) => {
  if (nav.length > 1 && element === nav[1]) {
    return true
  }

  if (nav.length > 0 && element === nav[0]) {
    return true
  }

  return false
}

const Navigation = ({ refs, links }) => {
  const [sticky, setSticky] = useState(false)
  const [visible, setVisible] = useState(false)
  const { store: { navigation } } = useStore()

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
            strings: 'Codejar',
            wrapperClassName: 'typewriter'
          }} />}
        <p>/&gt;</p>
      </div>
      <nav>
        {links.map(el => <li key={el.id}
          onClick={() => ScrollToRef(refs[el.id])}
          styleName={isElementVisible(el.id, navigation) ? 'selected' : ''}>
          {el.label}
        </li>)}
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
  refs: PropTypes.object
}

export default Navigation
