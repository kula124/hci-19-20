import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import './style.module.scss'
import Header from 'components/Header'

const BlogPost = ({ pageContext }) => {
  const { body, title, coverImage, summary, next, prev } = pageContext

  return (
    <div styleName='main-container'>
      <Header next={next}
        prev={prev} />
      <section styleName='heading'>
        <Img fluid={coverImage} />
        <h1>{title}</h1>
        <h3>{summary}</h3>
      </section>
      <section styleName='body'>
        <article>
          {documentToReactComponents(body)}
        </article>
      </section>
    </div>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default BlogPost
