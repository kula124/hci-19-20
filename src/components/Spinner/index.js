import React from 'react'
import PropTypes from 'prop-types'

import s from './style.module.scss'

const Spinner = ({ styleProp, ...rest }) =>
  <div styleName={styleProp ? `lds-ellipsis ${styleProp}` : 'lds-ellipsis'}
    {...rest} >
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>

Spinner.propTypes = {
  styleProp: PropTypes.string
}

export default Spinner
