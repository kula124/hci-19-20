import React, { useRef } from 'react'

import { ScrollToRef } from 'helper'
import PageHeading from 'modules/PageHeading'
import NumberSection from 'modules/Numbers'
import Navigation from 'modules/Navigation'
import { StoreProvider } from 'store'
import { links } from 'modules/Navigation/navigationData'

const IndexPage = () => {
  const refs = {
    about: useRef(),
    contact: useRef(),
    tech: useRef()
  }

  return (
    <StoreProvider>
      <PageHeading buttonOnClick={() => ScrollToRef(refs.tech)}
        Navigation>
        <Navigation
          links={links}
          refs={refs} />
      </PageHeading>
      <NumberSection ref={refs.tech} />
    </StoreProvider>
  )
}

export default IndexPage
