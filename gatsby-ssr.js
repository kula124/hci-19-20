import React from 'react'
import { StoreProvider } from 'store'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>{element}</StoreProvider>
  )
}
