import React from 'react'

import PageHeading from 'modules/PageHeading'
import NumberSection from 'modules/Numbers'
import Navigation from 'modules/Navigation'

const IndexPage = () => (
  <>
    <PageHeading Navigation={Navigation} />
    <NumberSection />
  </>
)

export default IndexPage
