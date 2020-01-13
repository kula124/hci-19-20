import React, { useState } from 'react'

import { ScrollToRef } from 'helper'
import Logo from 'components/Images/Logo'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'
import { useStore } from 'store'
import NavigationItem from './NavigationItem'
import './style.module.scss'

const isElementVisible = (element, nav) => {
  return nav[1] ? nav[1] === element : nav[0] === element
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
    <div className={sticky ? 'animated slideInDown' : 'animated fadeInUp'}
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
        {links.map(({ id, label, ...rest }) => <NavigationItem key={id}
          onClick={() => ScrollToRef(refs[id])}
          styleName={isElementVisible(id, navigation) ? 'selected' : ''}
          {...rest}>
          {label}
        </NavigationItem>)}
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  links: PropTypes.array.isRequired,
  refs: PropTypes.object
}

export default Navigation
