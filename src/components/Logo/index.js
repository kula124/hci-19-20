import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import Typewriter from 'typewriter-effect'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import get from 'lodash.get'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

const Logo = ({ imgOnly, narrowBracket, ...rest }) => {
  const data = useStaticQuery(graphql`
  query {
    codejarLogo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fluid(maxWidth: 60, maxHeight: 60, quality:100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`)

  if (imgOnly) {
    return <Img fluid={get(data, 'codejarLogo.childImageSharp.fluid')} />
  }

  return (
    <div styleName='main-container'>
      <Link to='/'>
        <section styleName='logo'>
          <div style={{ height: '25px', margin: '0 5px', width: '25px' }}>
            <Img fluid={get(data, 'codejarLogo.childImageSharp.fluid')} />
          </div>
          <p>&lt;</p>
          <Typewriter
            options={{
              autoStart: true,
              delay: 400,
              strings: 'Codejar',
              wrapperClassName: 'typewriter'
            }} />
          <p styleName={`${narrowBracket ? 'negative-margin' : ''}`}>/&gt;</p>
        </section>
      </Link>
    </div>
  )
}

Logo.propTypes = {
  imgOnly: PropTypes.bool,
  narrowBracket: PropTypes.bool
}

export default Logo
