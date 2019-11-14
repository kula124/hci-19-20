import React from 'react'

import './style.module.scss'

const FlatButton = ({onClick, styleProp, children}) => 
    <button onClick={onClick} styleName={styleProp || 'default'}>
        {children}
    </button>

export default FlatButton
