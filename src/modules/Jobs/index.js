import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'components/FlatButton'
import IsVisible from 'hooks/useIsVisible'
import './style.module.scss'

// eslint-disable-next-line react/display-name
const Jobs = React.forwardRef(({ visibilityProps }, ref) => {
  return (
    <IsVisible {...visibilityProps}>
      <section ref={ref}
        styleName='main-container'>
        <div styleName='content'>
          <h1>Looking for a job?</h1>
          <p>We are all nerds here (yes, even designers) and we are looking for more nerds to join our group
            We promise relaxed atmosphere, lots for games/tv/movies talk, and of course, technology and code!</p>
          <p>Don&apos;t worry if you don&apos;t know newest things! As Luteces say:</p>
          <p styleName='quote'>&apos;&apos;Life is like riding a bicycle. One never really knows or forgets.
            <br />One just needs the courage to climb aboard!&apos;&apos;</p>
          <p>LF:</p>
          <ul>
            <li>
                 Senior Backend developer (Node/.NET)
            </li>
            <li>
                 Junior Front-End developer (JS Frameworks-any)
            </li>
            <li>
                 DevOps, Senior lead
            </li>
            <li>
                 AI Engineer / Optimization problem solver
            </li>
          </ul>
          <div styleName='buttons'>
            <FlatButton styleProp='jobs'>
        I want to climb aboard!
            </FlatButton>
            <FlatButton styleProp='jobs'>
          What are you offering?
            </FlatButton>
          </div>
        </div>
      </section>
    </IsVisible>
  )
})

Jobs.propTypes = {
  visibilityProps: PropTypes.object
}

export default Jobs
