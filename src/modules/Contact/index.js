import React from 'react'
import PropTypes from 'prop-types'
import IsVisible from 'hooks/useIsVisible'

import './style.module.scss'

// eslint-disable-next-line react/display-name
const Contact = React.forwardRef(({ visibilityProps, refs, showSvg }, ref) => {
  const reset = () => {
    if (!refs) {
      return
    }

    Object.keys(refs).forEach(key => {
      refs[key].current.value = ''
    })
  }

  console.log(visibilityProps)

  return (
    <IsVisible {...visibilityProps}>
      <div ref={ref}
        styleName='main-container'>
        {showSvg && <svg className="svgcolor-light"
          height="75"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 100 102"
          width="100%"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0 L50 100 L100 0 Z"
            fill="white"
            stroke="white"></path>
        </svg>}
        <section styleName='contact'>
          <h1>Contact</h1>
          <div />
          <div styleName='separator' />
          <h3>Want to get in touch?</h3>
          <form>
            <input placeholder='Email'
              ref={refs ? refs.email : null} />
            <input placeholder='Title'
              ref={refs ? refs.title : null} />
            <textarea placeholder='Type your message here'
              ref={refs ? refs.message : null} />
            <div styleName='buttons'>
              <button name='submit'
                type='submit' >
                <span>Submit</span>
              </button>
              <button name='reset'
                onClick={reset}
                type='reset'>
                <span>Reset</span>
              </button>
            </div>
          </form>
        </section>
        <footer>
          <div styleName='icons'>
            <h3>Icons are courtesy of</h3>
            <ul>
              <div>Icons made by <a href="https://www.flaticon.com/authors/monkik"
                title="monkik">monkik</a> from <a href="https://www.flaticon.com/"
                title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/smalllikeart"
                title="smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com/"
                title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/nhor-phai"
                title="Nhor Phai">Nhor Phai</a> from <a href="https://www.flaticon.com/"
                title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26"
                title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/"
                title="Flaticon">www.flaticon.com</a></div>
            </ul>
          </div>
        </footer>
      </div>
    </IsVisible>
  )
})

Contact.propTypes = {
  refs: PropTypes.object,
  showSvg: PropTypes.bool,
  visibilityProps: PropTypes.object
}

export default Contact
