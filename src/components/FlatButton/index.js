import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

const FlatButton = ({ onClick, styleProp, children, ...rest }) =>
  <button onClick={onClick}
    styleName={styleProp || 'default'}
    {...rest}>
    {children}
  </button>

FlatButton.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  styleProp: PropTypes.string
}

export default FlatButton
