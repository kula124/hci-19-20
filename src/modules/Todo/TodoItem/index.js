import React from 'react'
import PropTypes from 'prop-types'

import './style.module.scss'

const urgencyColorMap = {
  'high': '#fa8900',
  'low': '#00c4a4',
  'mid': '#acdb00',
  'urgent': '#ff0059'
}

const Item = ({ title, timestamp, description, id, urgency }) => (
  <li style={{ backgroundColor: urgencyColorMap[urgency] }}
    styleName='main-container'>
    <header>
      <h2>{title}</h2>
      <h3>{`Urgency: ${urgency}`}</h3>
    </header>
    <article>{description}</article>
    <footer>
      <span>{`Task id: ${id}`}</span>
      <span>{`Date: ${timestamp}`}</span>
    </footer>
  </li>
)

Item.propTypes = {
  description: PropTypes.string,
  id: PropTypes.number,
  timestamp: PropTypes.string,
  title: PropTypes.string,
  urgency: PropTypes.number
}

export default Item
