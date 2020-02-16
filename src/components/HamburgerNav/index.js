import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { slide as Menu } from 'react-burger-menu'

const HamburgerNav = ({ children, ...rest }) => {
  const [open, setOpen] = useState(false)

  return (
    <Menu>
      {children}
    </Menu>
  )
}

HamburgerNav.propTypes = {
  children: PropTypes.object,
  links: PropTypes.array,
  rest: PropTypes.object
}

export default HamburgerNav
