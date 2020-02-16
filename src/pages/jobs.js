/* eslint-disable max-len */
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import keyBy from 'lodash.keyby'
import get from 'lodash.get'
import { Jobs } from 'constants/data'
import Img from 'gatsby-image'
import List from 'components/DelayedList'
import CountingCard from 'components/CountingCard'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import s from './jobs.module.scss'
import Contact from 'modules/Contact'
import Header from 'components/Header'

// eslint-disable-next-line react/prop-types
const Section = ({ images, children }) => (
  <main>
    <div>
      <Img fixed={images[0]} />
    </div>
    <article>
      {children}
    </article>
    <div>
      <Img fixed={images[1]} />
    </div>
  </main>
)

Section.styleProp = {
  children: PropTypes.string,
  images: PropTypes.array

}

const JobsPage = () => {
  const images = keyBy(
    useStaticQuery(graphql`
          query {
            allFile(filter: {name: {regex: "/_jobs/"}}) {
              edges {
                node {
                  list: childImageSharp {
                    fixed(width: 75, height: 75) {
                      src
                      originalName
                      srcSet
                      width
                      height
                      tracedSVG
                    }
                  },
                  small: childImageSharp {
                    fixed(width: 35, height: 35) {
                      src
                      originalName
                      srcSet
                      width
                      height
                      tracedSVG
                    }
                  },
                  large: childImageSharp {
                    fixed(width: 140, height: 140) {
                      src
                      originalName
                      srcSet
                      width
                      height
                      tracedSVG
                    }
                  },
                }
              }
            }
          }
        `).allFile.edges,
    e => get(e, 'node.list.fixed.originalName'))

  return (
    <div styleName='main-container'>
      <Header />
      <header styleName='header'>
        <main>
          <h1>
            {Jobs.heading}
          </h1>
          {
            <List listStyleContainer={Jobs.listStyleContainer} >
              {
                Jobs.listData.map(({ image, ...rest }, index) => <CountingCard
                  image={images[image]}
                  imageProp='node.list.fixed'
                  key={index}
                  {...rest} />)
              }
            </List>
          }
        </main>
      </header>
      <section styleName='description'>
        <main>
          <article>
            {Jobs.paragraph}
          </article>
          <article>
            We offer interesting projects, good clients and lots of flexibility
            <br/>Take a closer look below
          </article>
        </main>
      </section>
      <section styleName='code background_color-3'>
        <Section images={[images['code_jobs.png'].node.large.fixed, images['learn_jobs.png'].node.large.fixed]}
        >
          As you work, you will learn. A senior mentor will be available to you to at all times to ask questions. We also hold internal presentations and seminars
          where we all talk about tech, ask questions and learn from each-other. Your code will be subject to supervision by the lead senior on your project so
          you can work relaxed knowing there is a safety net and you are not alone!
        </Section>
      </section>
      <section styleName='social background_color-4'>
        <Section images={[images['grow_jobs.png'].node.large.fixed, images['like_jobs.png'].node.large.fixed]}
        >
          In time you wll learn and you will be less and less dependent on help. As you learn and grow, so does your reputation within the firm
          and among clients. All our employees have walked the same path as you. It is encouraged within the firm that you talk to your coworkers and
          socialize. Team-building event are scheduled through the year to help with this. As you grow, salary follows.
          Then it will be your turn to mentor someone new.
        </Section>
      </section>
      <footer>
        <Contact />
      </footer>
    </div>
  )
}

/*
<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
*/
export default JobsPage
