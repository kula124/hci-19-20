import Typewriter from 'typewriter-effect'
import React from 'react'
import chunk from 'lodash.chunk'
import PropTypes from 'prop-types'

import { GenerateRandomString } from '../../helper'

const LazyTypewritter = ({ string, tries, ...rest }) => {
  const substringLen = parseInt(string.length / tries)
  const subs = chunk(string, substringLen).map(e => e.join(''))
  const rnds = chunk(GenerateRandomString(string.length), parseInt(substringLen / 2)).map(e => e.join(''))

  let i

  return <Typewriter onInit={(typewriter) => {
    typewriter.typeString(subs[0])

    for (i = 0; i < tries; i++) {
      typewriter
        .typeString(rnds[i])
        .pauseFor(100)
        .deleteChars(parseInt(substringLen / 2))
        .pauseFor(100)
        .typeString(subs[i + 1])
    }
    typewriter.start()
  }}
  options={rest}
  />
}

LazyTypewritter.propTypes = {
  string: PropTypes.string,
  tries: PropTypes.number
}

export default LazyTypewritter
