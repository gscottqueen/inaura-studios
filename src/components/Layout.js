import React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import '../fonts/fonts.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet 
      title="Inaura Studios | Your Digital Zen" 
      meta={[
        { name: 'description', content: 'We craft custom fidelity prototypes for big digital ideas.'},
        { name: 'keywords', content: 'prototypes , digital' },
        { property:'og:description', content: 'We craft custom fidelity prototypes for big digital ideas.' },
        { property: 'og:url', content: '//inaurastudios.com/'},
        { property: 'twitter:description', content: 'We craft custom fidelity prototypes for big digital ideas.'},
        { property: 'twitter:url', content: '//inaurastudios.com/'},
      ]}/>
    <main>{children}</main>
    <Footer />
  </div>
)

export default TemplateWrapper
