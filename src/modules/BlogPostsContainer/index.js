import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import { responseMapper, mappers } from 'helper'
import AnimatedSpacer from 'components/AnimatedSpacer'
import BlogPost from 'layouts/BlogSummary'
import VisibilitySensor from 'hooks/useIsVisible'

import './style.module.scss'

const listMapper = responseMapper(mappers.blogList)
const blogPostMapper = responseMapper(mappers.blogPosts)

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
