import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'
import keyBy from 'lodash.keyby'

import BigHeroLayout from 'components/BigHeroLayout'
import { Numbers } from 'constants/data'

// eslint-disable-next-line react/display-name
const NumbersModule = React.forwardRef((props, ref) => {
  const images =
    keyBy(
      useStaticQuery(graphql`
        query {
          allFile(filter: {name: {regex: "/_num/"}}) {
            edges {
              node {
                childImageSharp {
                  fixed(width: 100, height: 100) {
                    src
                    originalName
                    srcSet
                    width
                    height
                    tracedSVG
                  }
                }
              }
            }
          }
        }
      `).allFile.edges,
    e => get(e, 'node.childImageSharp.fixed.originalName')) // eslint-disable-line

  return (
    <BigHeroLayout images={images}
      ref={ref}
      styleProp={'main-numbers'}
      {...Numbers}/>
  )
})

export default NumbersModule

// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
