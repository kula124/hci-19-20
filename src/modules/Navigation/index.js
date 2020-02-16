import React, { useState } from 'react'

import { ScrollToRef } from 'helper'
import Logo from 'components/Logo'
import PropTypes from 'prop-types'
import { useStore } from 'store'
import NavigationItem from './NavigationItem'
import './style.module.scss'
import AuthProtector from 'components/AuthProtector'
import { logout } from 'actions/auth'

const isElementVisible = (element, nav) => {
  return nav[1] ? nav[1] === element : nav[0] === element
}

const Navigation = ({ refs, links }) => {
  const [sticky, setSticky] = useState(false)
  const [visible, setVisible] = useState(false)
  const { store: { navigation, auth }, dispatch } = useStore()

  if (typeof window !== `undefined`) {
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
  }

  return (
    <div className={sticky ? 'animated slideInDown' : 'animated fadeInUp'}
      styleName={sticky ? 'main-container sticky' : 'main-container' }>
      <div styleName='logo'>
        {visible && <Logo />}
        {auth.status
          ? <a>
            <li onClick={() => dispatch(logout())}>
                Logout
            </li>
          </a>
          : <NavigationItem to='login'>
            Login
          </NavigationItem>}
        <AuthProtector>
          <NavigationItem to='profile'>
            Profile
          </NavigationItem>
        </AuthProtector>
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
