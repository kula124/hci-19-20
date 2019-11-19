import React from 'react'
import MaterialIcon from '@material/react-material-icon'

import FlatButton from '../../components/FlatButton'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

import './style.module.scss'

const PageHeading = () => {
  // Loading image
  const imgData = useStaticQuery(graphql`
    query {
      codejarLogo: file(relativePath: { eq: "codejar.png" }) {
        childImageSharp {
          fixed(width: 400) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div styleName='main-container'>
      <h1>Welcome to </h1>
      <Img fixed={imgData.codejarLogo.childImageSharp.fixed} />
      <h1>Software development firm</h1>
      <FlatButton>
        <span>Take a peak</span>
        <MaterialIcon icon='arrow_forward' />
      </FlatButton>
    </div>)
}

export default PageHeading
