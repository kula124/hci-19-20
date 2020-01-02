import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import Count from 'react-countup'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

const and = (v1, v2) => !!v1 && !!v2

const CountingCard = ({
  image,
  header,
  text,
  animationListItemClass,
  listItemClassName,
  count,
  visible }) => (
  <li>
    <figure className={visible ? animationListItemClass : ''}
      styleName={visible ? `${listItemClassName}-visible` : listItemClassName}>
      {header && <h3>{header}</h3>}
      <div styleName='image-container'>
        <Img fixed={image.node.childImageSharp.fixed} />
      </div>
      {and(visible, count !== 0) && <Count
        duration={4}
        end={count}
        separator=','
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
  header: PropTypes.string,
  image: PropTypes.object.isRequired,
  listItemClassName: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool

}

export default CountingCard
