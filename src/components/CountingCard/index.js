import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Count from 'react-countup'

import './style.module.scss'

const and = (v1, v2) => !!v1 && !!v2

const CountingCard = ({
  image,
  text,
  animationListItemClass,
  defaultStyleName,
  listItemVisibleClass,
  count,
  visible }) => (
  <li>
    <figure className={visible ? animationListItemClass : ''}
      styleName={visible ? listItemVisibleClass : defaultStyleName}>
      <div styleName='image-container'>
        <Img fixed={image.node.childImageSharp.fixed} />
      </div>
      {and(visible, count !== 0) && <Count
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
  animationListItemClass: PropTypes.string,
  count: PropTypes.number,
  defaultStyleName: PropTypes.string,
  image: PropTypes.object.isRequired,
  listItemVisibleClass: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool

}

export default CountingCard
