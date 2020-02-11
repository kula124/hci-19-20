import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Typewriter from 'typewriter-effect'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Logo from 'components/Images/Logo'

import './style.module.scss'

const BlogPost = ({ pageContext }) => {
  const { body, title, coverImage, summary } = pageContext
  const [show, setShow] = useState()

  const scrollController = () => prev => {
    if (document.body.scrollTop > prev) {
      return setShow(false)
    }

    if (document.body.scrollTop < prev) {
      return setShow(true)
    }

    prev = document.body.scrollTop
  }

  if (document && window) {
    window.onScroll = scrollController(document.body.scrollTop)
  }

  return (
    <div styleName='main-container'>
      <header className='animated fadeInDown'
        styleName={`${show ? 'sticky' : 'hidden'}`}>
        <section styleName='logo'>
          <Logo />
          <p>&lt;</p>
          <Typewriter
            options={{
              autoStart: true,
              delay: 400,
              strings: 'Codejar',
              wrapperClassName: 'typewriter'
            }} />
          <p>/&gt;</p>
        </section>
      </header>
      <section styleName='heading'>
        <Img fluid={coverImage} />
        <h1>{title}</h1>
        <h3>{summary}</h3>
      </section>
      <section styleName='body'>
        <text>
          {documentToReactComponents(body)}
        </text>
      </section>
      <footer>
        <span>Nex</span>
        <span>Prev</span>
      </footer>
    </div>
  )
}

BlogPost.propTypes = {
  pageContext: PropTypes.object.isRequired
}

export default BlogPost
