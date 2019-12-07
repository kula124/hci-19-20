import React from 'react'
// import PropTypes from 'prop-types'
import get from 'lodash.get'
import { useStaticQuery, graphql } from 'gatsby'

// import loc from 'resources/crn.svg'
import CountingCard from 'components/CountingCard'

import './style.module.scss'

const find = (arr, string) =>
  get(arr.find(e =>
    get(e, `node.childImageSharp.fixed.originalName`) === string),
  'node.childImageSharp')

const Numbers = (props) => {
  const images = useStaticQuery(graphql`
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
`).allFile.edges

  const countList = [
    {
      count: 280686,
      image: find(images, 'code_num.png'),
      text: 'lines of sleek clean code written by our developers and still counting'
    },
    {
      count: 40824,
      image: find(images, 'git_num.png'),
      text: `commits proves we are committed to write functional and 
        efficient production code reviewed by our QA and client personally`
    },
    {
      count: 6,
      image: find(images, 'experience_num.png'),
      text: 'major projects that made it to production and are used by millions of users around the world'
    },
    {
      count: 5,
      image: find(images, 'client_num.png'),
      text: 'happy clients. Are you ready to join them?'
    }
  ]

  return (<section styleName='main-container'>
    <h1>
      May the numbers be ever in your favour!
    </h1>
    <p>
      Luckily, they are in ours. Let the numbers speak! Experience in number of
      challenging projects, sleek and clean code and happiness of our clients gives us confidence
      in tackling any challenge you may throw at us!
    </p>
    <ul>
      {countList.map(el => <CountingCard key={el.count + countList.indexOf(el)}
        {...el} />)}
    </ul>
  </section>)
}

// LOC 280686
// Commits 40824
Numbers.propTypes = {}

export default Numbers

// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/monkik" title="monkik">monkik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai" title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
// eslint-disable-next-line max-len
// <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
