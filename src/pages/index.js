import React from 'react'
import Layout from '../components/Layout'
import '../components/layout.css'

export default class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <section>
          <h1>Inaura<br></br> Studios</h1>
          <h2>Your digital zen.</h2>
          <p>We craft custom fidelity prototypes for big digital ideas.</p>
        </section>
        <div className="block-anchor"></div>
      </Layout>
    )
  }
}
