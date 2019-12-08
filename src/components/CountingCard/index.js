import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Count from 'react-countup'

import './style.module.scss'

const CountingCard = ({ image, text, count, visible }) => (
  <li>
    <figure className={visible ? 'animated flipInY' : ''}
      styleName={visible ? 'main-container-visible' : 'main-container'}>
      <div styleName='image-container'>
        <Img fixed={image.node.childImageSharp.fixed} />
      </div>
      {visible && <Count
        duration={4}
        end={count}
        start={0} /> }
      <figcaption>
        {text}
      </figcaption>
    </figure>
  </li>
)

CountingCard.propTypes = {
  count: PropTypes.number,
  image: PropTypes.object.isRequired,
  text: PropTypes.string,
  visible: PropTypes.bool

}

export default CountingCard
