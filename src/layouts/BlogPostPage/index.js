import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Typewriter from 'typewriter-effect'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import MaterialIcon from '@material/react-material-icon'

import Logo from 'components/Images/Logo'

import './style.module.scss'

const BlogPost = ({ pageContext }) => {
  const { body, title, coverImage, summary, next, prev } = pageContext

  return (
    <div styleName='main-container'>
      <header className='animated fadeInDown'
        styleName='sticky'>
        {prev
          ? <Link to={`/posts/${prev.slug}`}>
            <section styleName='n-p'>
              <MaterialIcon icon='arrow_back'/>
              <span>Previous</span>
            </section>
          </Link>
          : <div />
        }
        <Link to='/'>
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
        </Link>
        {next
          ? <Link to={`/posts/${next.slug}`} >
            <section styleName='n-p'>
              <span>Next</span>
              <MaterialIcon icon='arrow_forward'/>
            </section>
          </Link>
          : <div />
        }
      </header>
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
