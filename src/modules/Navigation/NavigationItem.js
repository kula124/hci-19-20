import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const NavItem = ({ to, onClick, children, ...rest }) => {
  return !to
    ? <li {...rest}
      onClick={onClick}>{children}</li>
    : <Link to={to}
      {...rest}>
      <li>
        {children}
      </li>
    </Link>
}

NavItem.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default NavItem
