import React from 'react'
import MaterialIcon from '@material/react-material-icon'
import PropTypes from 'prop-types'

import LazyTypewriter from 'components/LazyTypewriter'
import FlatButton from 'components/FlatButton'
import Logo from 'components/Images/Logo'

import './style.module.scss'

const PageHeading = ({ Navigation, buttonOnClick, children }) => (
  <div styleName='main-container'>
    <h1>Welcome to </h1>
    <figure>
      <Logo />
      <figcaption>
        <span styleName='code'>&lt;</span>
        <LazyTypewriter string={'Codejar'}
          tries={3} />
        <span styleName='code'>/&gt;</span>
      </figcaption>
    </figure>
    <h1>Software development firm</h1>
    <FlatButton onClick={buttonOnClick}>
      <span>Take a peak</span>
      <MaterialIcon icon='arrow_forward' />
    </FlatButton>
    {Navigation ? children : null}
  </div>
)

PageHeading.propTypes = {
  Navigation: PropTypes.bool,
  buttonOnClick: PropTypes.func,
  children: PropTypes.object
}

export default PageHeading
