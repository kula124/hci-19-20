import React, { useRef } from 'react'

import { ScrollToRef } from 'helper'
import PageHeading from 'modules/PageHeading'
import NumberSection from 'modules/Numbers'
import Navigation from 'modules/Navigation'
import { StoreProvider } from 'store'

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
        <Navigation refs={refs} />
      </PageHeading>
      <NumberSection ref={refs.tech} />
    </StoreProvider>
  )
}

export default IndexPage
