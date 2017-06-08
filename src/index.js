import React from 'react'
import ReactDOMServer from 'react-dom/server'

const renderToString = (Component, props) => (
  ReactDOMServer.renderToString(
    <Component
      {...props}
    />
  )
)

const renderToStaticMarkup = (Component, props) => (
  ReactDOMServer.renderToStaticMarkup(
    <Component
      {...props}
    />
  )
)

export {
  renderToString,
  renderToStaticMarkup
}
