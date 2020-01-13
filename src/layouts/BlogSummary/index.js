import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

import './style.module.scss'

const BlogPostSummary = ({ coverImage, summary, title }) => (
  <div styleName='main-container'>
    <h3>{title}</h3>
    <Img fluid={coverImage} />
    <p>{summary}</p>
  </div>)

BlogPostSummary.propTypes = {
  coverImage: PropTypes.object,
  summary: PropTypes.string,
  title: PropTypes.string
}

export default BlogPostSummary
