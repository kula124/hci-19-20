import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './style.module.scss'

const Hamburger = ({ children }) => {
  const [open, setOpen] = useState(false)

  const click = () => {
    setOpen(!open)
  }

  return (
    <div styleName='main-container'>
      <div styleName={`pad${open ? ' show' : ''}`}>
        <nav onClick={click}>
          { children }
        </nav>
      </div>
      <div onClick={click}
        styleName={`burger${open ? ' on' : ''}`} >
        <div />
        <div />
        <div />
      </div>
    </div>)
}

Hamburger.propTypes = {
  children: PropTypes.object
}

export default Hamburger
