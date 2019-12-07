import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash.get'

const Image = () => {
  const data = useStaticQuery(graphql`
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
    <Img fixed={get(data, 'codejarLogo.childImageSharp.fixed')} />
  )
}

export default Image
