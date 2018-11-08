import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import '../fonts/fonts.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Inaura Studios | Digital Zen" />
    <main>{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
