import React, { useRef } from 'react'

import { ScrollToRef, delay } from 'helper'
import PageHeading from 'modules/PageHeading'
import NumberSection from 'modules/Numbers'
import Navigation from 'modules/Navigation'
import CrossPlatformSection from 'modules/CrossPlatform'
import { links } from 'modules/Navigation/navigationData'
import AnimatedSpacer from 'components/AnimatedSpacer'
import BlogPostContainer from 'modules/BlogPostsContainer'
import Jobs from 'modules/Jobs'
import Contact from 'modules/Contact'
import ToastMessage from 'components/ToastMessage'

const IndexPage = () => {
  const refs = {
    about: useRef(),
    blog: useRef(),
    contact: useRef(),
    jobs: useRef(),
    tech: useRef()
  }

  const footerRefs = {
    email: useRef(),
    message: useRef(),
    title: useRef()
  }

  const fillOutForm = async () => {
    ScrollToRef(footerRefs.email)
    await delay(1000)
    footerRefs.email.current.value = `Set your email`
    footerRefs.message.current.value = `I'm ready to join you! My skilled are:\n<Name your skills>`
    footerRefs.title.current.value = `I would like to climb aboard!`
  }

  return (
    <>
      <ToastMessage />
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
      <Jobs buttonOnClick={() => fillOutForm()}
        ref={refs.jobs}
        visibilityProps={{ id: 'jobs' }} />
      <Contact ref={refs.contact}
        refs={footerRefs}
        showSvg={true}
        visibilityProps={{ id: 'contact' }} />
    </>
  )
}

export default IndexPage
