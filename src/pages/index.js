import React, { useRef } from 'react'

import { ScrollToRef } from 'helper'
import PageHeading from 'modules/PageHeading'
import NumberSection from 'modules/Numbers'
import Navigation from 'modules/Navigation'
import { StoreProvider } from 'store'
import CrossPlatformSection from 'modules/CrossPlatform'
import { links } from 'modules/Navigation/navigationData'
import VisibilitySensor from 'hooks/useIsVisible'
import AnimatedSpacer from 'components/AnimatedSpacer'

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
      <VisibilitySensor id={'tech'}>
        <div ref={refs.tech}>
          <NumberSection />
          <AnimatedSpacer />
          <CrossPlatformSection />
        </div>
      </VisibilitySensor>
    </StoreProvider>
  )
}

export default IndexPage
