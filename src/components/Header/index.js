import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Typewriter from 'typewriter-effect'
import MaterialIcon from '@material/react-material-icon'
import Logo from 'components/Images/Logo'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

const Header = ({ prev, next }) => {
  const [state, setState] = useState({ show: true, prev: 0 })
  const onScroll = () => {
    if (typeof document === 'undefined' || typeof window === 'undefined') {
      return
    }

    const { prev } = state

    const currentScrollPos = window.pageYOffset
    const show = prev > currentScrollPos

    setState({
      prev: currentScrollPos,
      show
    })
  }

  useEffect(() => {
    addEventListener('scroll', onScroll)

    return () => {
      removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className='animated fadeInDown'
      styleName={`main-container${state.show ? '' : ' hide'}`}>
      {prev
        ? <Link to={`/posts/${prev.slug}`}>
          <section styleName='n-p'>
            <MaterialIcon icon='arrow_back'/>
            <span>Previous</span>
          </section>
        </Link>
        : <div />
      }
      <Link to='/'>
        <section styleName='logo'>
          <Logo />
          <p>&lt;</p>
          <Typewriter
            options={{
              autoStart: true,
              delay: 400,
              strings: 'Codejar',
              wrapperClassName: 'typewriter'
            }} />
          <p>/&gt;</p>
        </section>
      </Link>
      {next
        ? <Link to={`/posts/${next.slug}`} >
          <section styleName='n-p'>
            <span>Next</span>
            <MaterialIcon icon='arrow_forward'/>
          </section>
        </Link>
        : <div />
      }
    </header>)
}

Header.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object
}

export default Header
