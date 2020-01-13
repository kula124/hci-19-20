import React from 'react'
import PropTypes from 'prop-types'
import UseRevealed from 'hooks/useRevealed'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

const AnimatedSpacer = ({ animation, styleProp }) => (
  <UseRevealed>
    <div
      className={animation || 'animated slideInRight'}
      styleName={styleProp || 'main'}
    />
  </UseRevealed>
)

AnimatedSpacer.propTypes = {
  animation: PropTypes.string,
  styleProp: PropTypes.string
}

export default AnimatedSpacer
