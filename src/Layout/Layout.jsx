import React from 'react'

import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({ children, className, style }) => (
  <div className={className} style={style}>
    <Navbar />
    {children}
    <Footer />
  </div>
)

export default Layout
