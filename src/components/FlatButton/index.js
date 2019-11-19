import React from 'react'
import PropTypes from 'prop-types'

import './style.module.scss'

const FlatButton = ({ onClick, styleProp, children }) =>
  <button onClick={onClick}
    styleName={styleProp || 'default'}>
    {children}
  </button>

FlatButton.propTypes = {
  children: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  styleProp: PropTypes.string
}

export default FlatButton
