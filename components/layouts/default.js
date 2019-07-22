import React from 'react'
import Header from '../header'
import Footer from '../footer'
import Container from '../container'

import '../../styles/main.css'

function Layout ({ path, children, pageTitle, ogImage }) {
  return (
    <Container>
      <Header path={path} pageTitle={pageTitle} ogImage={ogImage} />

      <main className="flex-grow container md-auto px-4">{children}</main>

      <Footer />
    </Container>
  )
}

export default Layout
