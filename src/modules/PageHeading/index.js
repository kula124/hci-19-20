import React from 'react'
// import Img from 'gatsby-image'
import Image from '../../components/image'
import FlatButton from '../../components/FlatButton'

import './style.module.scss'

const PageHeading = () => 
  <div styleName='main-container'>
    <h1>Welcome to </h1>
    <Image />
    <h1>Software development firm</h1>
    <FlatButton>
      <span>Take a peak</span>
    </FlatButton>
  </div>

export default PageHeading
