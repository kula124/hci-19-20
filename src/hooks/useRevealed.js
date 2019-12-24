import React, { useState } from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'react-visibility-sensor'

const Revealer = ({ children }) => {
  const [visible, setVisible] = useState(false)

  return <VisibilitySensor onChange={isVisible => isVisible ? setVisible(true) : null}>
    {visible ? children : <div/>}
  </VisibilitySensor>
}

Revealer.propTypes = {
  children: PropTypes.object.isRequired
}

export default Revealer
