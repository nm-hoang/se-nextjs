/** @format */

import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

// const globalIcon = require('assert/{{Logo}}')
const GlobalContext = React.createContext()
const GlobalConsumer = GlobalContext.Consumer

const defaultMeta = {
  title: 'Hotel Booking',
  // image: globalIcon
}

const renderHelmet = (meta) => (
  <Helmet
    htmlAttributes={{ lang: 'en' }}
    title={meta.title}
    meta={[
      {
        name: 'viewport',
        content:
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
      },
      {
        name: 'format-detection',
        content: 'yes',
      },
    ]}
    link={[
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: meta.image,
      },
      // Fonts
      {
        rel: 'preconnect',
        type: 'text/css',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400&display=swap',
      },
    ]}
    script={[]}
  />
)

const GlobalProvider = (props) => {
  const [meta, setMeta] = useState(defaultMeta)
  return (
    <GlobalContext.Provider
      value={{
        meta,
        setMeta,
      }}
    >
      {meta && renderHelmet(meta)}
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider

export { GlobalContext, GlobalConsumer, GlobalProvider }

GlobalProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
}

GlobalProvider.defaultProps = {
  children: {},
}
