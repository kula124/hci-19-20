import React from 'react'
import MaterialIcon from '@material/react-material-icon'

import LazyTypewriter from 'components/LazyTypewriter'
import FlatButton from 'components/FlatButton'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import './style.module.scss'

const PageHeading = () => {
  // Loading image
  const imgData = useStaticQuery(graphql`
    query {
      codejarLogo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 60, height: 60, quality:100) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div styleName='main-container'>
      <h1>Welcome to </h1>
      <figure>
        <Img fixed={imgData.codejarLogo.childImageSharp.fixed} />
        <figcaption>
          <span styleName='code'>&lt;</span>
          <LazyTypewriter string={'Codejar '}
            tries={3} />
          <span styleName='code'>/&gt;</span>
        </figcaption>
      </figure>
      <h1>Software development firm</h1>
      <FlatButton>
        <span>Take a peak</span>
        <MaterialIcon icon='arrow_forward' />
      </FlatButton>
    </div>)
}

export default PageHeading
