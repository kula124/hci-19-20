import React from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import PropTypes from 'prop-types'
import { addVisible, removeVisible } from 'actions/navigation'

import { useStore } from 'store'
import { GetViewportSize } from 'helper'

const Visible = ({ children, id, ...rest }) => {
  const { dispatch } = useStore()

  return (
    <VisibilitySensor
      onChange={
        isVisible => dispatch(isVisible ? addVisible(id) : removeVisible(id))
      }
      partialVisibility
      {...rest}>
      {children}
    </VisibilitySensor>
  )
}

Visible.propTypes = {
  children: PropTypes.object,
  id: PropTypes.string
}

Visible.defaultProps = {
  minTopValue: GetViewportSize().height * 0.2 // 20% of viewport height
}
export default Visible
