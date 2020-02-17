import React from 'react'
import { useStore } from 'store'

import './style.module.scss'

const ToastMessage = () => {
  const { store } = useStore()

  return (
    <div styleName={`a-toast${store.showToast ? ' show' : ''}`}>
      <p>
          Success!
      </p>
    </div>
  )
}

export default ToastMessage
