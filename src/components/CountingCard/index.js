import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Count from 'react-countup'

import './style.module.scss'

const CountingCard = ({ image, text, count }) => (
  <li>
    <figure styleName='main-container'>
      <div styleName='image-container'>
        <Img fixed={image.node.childImageSharp.fixed} />
      </div>
      <Count
        duration={4}
        end={count}
        start={0} />
      <figcaption>
        {text}
      </figcaption>
    </figure>
  </li>
)

CountingCard.propTypes = {
  count: PropTypes.number,
  image: PropTypes.object.isRequired,
  text: PropTypes.string

}

export default CountingCard
