import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { responseMapper } from 'helper'
import AnimatedSpacer from 'components/AnimatedSpacer'
import BlogPost from 'layouts/BlogSummary'
import VisibilitySensor from 'hooks/useIsVisible'

import './style.module.scss'

const mapList = {
  'posts': 'allContentfulBlogPost.nodes'
}

const mapBlog = {
  'body': 'body.body',
  'coverImage': 'coverImage.fluid',
  'id': 'body.id',
  'summary': 'summary.internal.content',
  'title': 'title',
  'updatedAt': 'updatedAt'
}

const listMapper = responseMapper(mapList)
const blogPostMapper = responseMapper(mapBlog)

// eslint-disable-next-line react/display-name
const BlogPostContainer = React.forwardRef((props, ref) => {
  const rawData = useStaticQuery(graphql`query {
    allContentfulBlogPost {
      nodes {
        summary {
          internal {
            content
          }
        }
        body {
          body
          id
        }
        title
        updatedAt
        coverImage {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }`)

  const data = listMapper(rawData).posts.map(blogPostMapper)

  return (
    <VisibilitySensor id='blog'>
      <section ref={ref}
        styleName='main-container'>
        <h2>Blog</h2>
        <AnimatedSpacer offset={{ bottom: 100 }}
          styleProp={'blog'}/>
        <ul>
          {data.map(({ id, ...rest }) => <BlogPost key={Math.random()}
            {...rest} />)}
        </ul>
      </section>
    </VisibilitySensor>
  )
})

export default BlogPostContainer
