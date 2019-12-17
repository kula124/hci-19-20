import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import get from 'lodash.get'
import keyBy from 'lodash.keyby'
import VisibilitySensor from 'hooks/useIsVisible'

import List from 'components/DelayedList'
import data from './data'
import CountingCard from 'components/CountingCard'

import './style.module.scss'

// eslint-disable-next-line react/display-name
const Numbers = React.forwardRef((props, ref) => {
  const images =
    keyBy(
      useStaticQuery(graphql`
        query images {
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
    <VisibilitySensor id='tech'>
      <section ref={ref}
        styleName='main-container'>
        <h1>
          May the numbers be ever in your favour!
        </h1>
        <p>
          Luckily, they are in ours. Let the numbers speak! Experience in number of
          challenging projects, sleek and clean code and happiness of our clients gives us confidence
          in tackling any challenge you may throw at us!
        </p>
        <List>
          {data.map(({ image, ...rest }, index) => <CountingCard image={images[image]}
            key={index}
            {...rest} />)}
        </List>
      </section>
    </VisibilitySensor>
  )
})

export default Numbers

// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
