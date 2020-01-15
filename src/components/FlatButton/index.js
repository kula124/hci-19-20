import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

// eslint-disable-next-line react/display-name
const FlatButton = React.forwardRef(({ onClick, styleProp, children, ...rest }, ref) =>
  <button onClick={onClick}
    ref={ref}
    styleName={styleProp || 'default'}
    {...rest}>
    {children}
  </button>)

FlatButton.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func.isRequired,
  styleProp: PropTypes.string
}

export default FlatButton
