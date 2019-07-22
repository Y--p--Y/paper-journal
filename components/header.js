import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Nav from './nav'
import Title from './title'

function Header ({ path, pageTitle, ogImage }) {
  return (
    <>
      <Head title={pageTitle} ogImage={ogImage} />

      <header className="p-2 bg-purple-900 text-white mb-4">
        <Title path={path} />
        <Nav />
      </header>
      <style jsx global>
        {`
          .wrap {
            max-width: 38rem;
            margin-left: auto;
            margin-right: auto;
          }

          article img {
            max-width: 100%;
            height: auto;
          }
        `}
      </style>
    </>
  )
}

Header.propTypes = {
  path: PropTypes.string,
  pageTitle: PropTypes.string,
  ogImage: PropTypes.string
}

export default Header
