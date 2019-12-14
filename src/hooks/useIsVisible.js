import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import { addVisible, removeVisible } from 'actions/navigation'

import { useStore } from 'store'

const Visible = ({ children, id }) => {
  const { dispatch } = useStore()

  return (
    <VisibilitySensor onChange={
      isVisible => dispatch(isVisible ? addVisible(id) : removeVisible(id))
    }>
      {children}
    </VisibilitySensor>
  )
}

Visible.propTypes = {
  children: PropTypes.array,
  id: PropTypes.string
}

export default Visible
