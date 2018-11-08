import React from 'react'
import Helmet from 'react-helmet'

// import Navbar from '../components/Navbar'
import './all.sass'
import '../fonts/fonts.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Inaura Studios | Digital Zen" />
    {/* <Navbar /> */}
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
