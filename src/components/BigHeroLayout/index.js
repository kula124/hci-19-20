import React from 'react'
import PropTypes from 'prop-types'
import VisibilitySensor from 'hooks/useIsVisible'
import List from 'components/DelayedList'
import CountingCard from 'components/CountingCard'

// eslint-disable-next-line no-unused-vars
import s from './style.module.scss'

// eslint-disable-next-line react/display-name
const Layout = React.forwardRef(
  ({ heading, paragraph, id, images, listData, styleProp, listStyleContainer, ...rest }, ref) => {
    return (
      <VisibilitySensor id={id}>
        <section ref={ref}
          styleName={styleProp}>
          <h1>{heading}</h1>
          <p>{paragraph}</p>
          <List listStyleContainer={listStyleContainer}>
            {listData.map(({ image, ...rest }, index) => <CountingCard
              image={images[image]}
              key={index}
              {...rest} />)}
          </List>
        </section>
      </VisibilitySensor>
    )
  })

Layout.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.string,
  images: PropTypes.array.isRequired,
  listData: PropTypes.array.isRequired,
  listStyleContainer: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  styleProp: PropTypes.string
}

export default Layout
