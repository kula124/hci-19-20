import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import get from 'lodash.get'

const Image = () => {
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

  return (
    <Img fluid={get(data, 'codejarLogo.childImageSharp.fluid')} />
  )
}

export default Image
