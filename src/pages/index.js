import React, { useRef } from 'react'

import { ScrollToRef } from 'helper'
import PageHeading from 'modules/PageHeading'
import NumberSection from 'modules/Numbers'
import Navigation from 'modules/Navigation'
import CrossPlatformSection from 'modules/CrossPlatform'
import { links } from 'modules/Navigation/navigationData'
import AnimatedSpacer from 'components/AnimatedSpacer'
import BlogPostContainer from 'modules/BlogPostsContainer'
import Jobs from 'modules/Jobs'

const IndexPage = () => {
  const refs = {
    about: useRef(),
    blog: useRef(),
    contact: useRef(),
    jobs: useRef(),
    tech: useRef()
  }

  return (
    <>
      <PageHeading buttonOnClick={() => ScrollToRef(refs.about)}
        Navigation>
        <Navigation
          links={links}
          refs={refs} />
      </PageHeading>
      <NumberSection ref={refs.about}
        visibilityProps={{ id: 'about' }} />
      <AnimatedSpacer />
      <CrossPlatformSection ref={refs.tech}
        visibilityProps={{ id: 'tech' }} />
      <BlogPostContainer ref={refs.blog} />
      <Jobs ref={refs.jobs}
        visibilityProps={{ id: 'jobs' }} />
    </>
  )
}

export default IndexPage
