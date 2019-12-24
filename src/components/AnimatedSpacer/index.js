import React from 'react'
import PropTypes from 'prop-types'
import UseRevealed from 'hooks/useRevealed'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

const Spacer = ({ animation, styleProp }) => (
  <UseRevealed>
    <div
      className={animation}
      styleName={styleProp}
    />
  </UseRevealed>
)

Spacer.propTypes = {
  animation: PropTypes.string.isRequired,
  styleProp: PropTypes.string.isRequired
}

Spacer.defaultProps = {
  animation: 'animated slideInRight',
  styleProp: 'main'
}

export default Spacer
