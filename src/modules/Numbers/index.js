import React from 'react'
// import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

// import loc from 'resources/crn.svg'
import CountingCard from 'components/CountingCard'

import './style.module.scss'

const Numbers = (props) => {
  const loc = useStaticQuery(graphql`
query {
  codejarLogo: file(relativePath: { eq: "admin.inline.png" }) {
    childImageSharp {
      fixed(width: 100, height: 100, quality:100, fit:CONTAIN) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`)

  const countList = [
    {
      count: 280686,
      image: loc,
      text: 'lines of sleek clean code written by our developers and still counting'
    },
    {
      count: 40824,
      image: loc,
      text: `commits proves we are committed to write functional and 
        efficient production code reviewed by our QA and client personally`
    },
    {
      count: 6,
      image: loc,
      text: 'major projects that made it to production and are used by millions of users around the world'
    },
    {
      count: 5,
      image: loc,
      text: 'happy clients. Are you ready to join them?'
    }
  ]

  console.log(loc)

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
