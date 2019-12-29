/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/browser.scss'
import './src/styles/global.scss'
import './src/styles/colors.scss'

import React from 'react'
import { StoreProvider } from 'store'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return (
    <StoreProvider>{element}</StoreProvider>
  )
}
