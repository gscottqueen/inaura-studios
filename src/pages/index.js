import React from 'react'
import PropTypes from 'prop-types'
// import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

// icons
import Mail from '../img/if_008_Mail_183573.svg'
import Location from '../img/if_location_1585851.svg'

export default class IndexPage extends React.Component {
  render() {
    // const { data } = this.props
    // const { edges: posts } = data.allMarkdownRemark


    const detailsStyles = {
      "fontSize" : "12px",
    }

    const iconStylesMail = {
      "width" : "16px",
      "margin" : "10px 10px 0 0",
      "position" : "relative",
      "top" : "5px",
      "left" : "5px",
      "opacity" : ".4"
    }

    const iconStylesLocation = {
      "width" : "16px",
      "margin" : "10px 3px 0 0",
      "position" : "relative",
      "top" : "5px",
      "left" : "5px",
      "opacity" : ".4"
    }

    const blockAnchor = {
      "width" : "250px",
      "borderBottom" : "35px solid",
      "margin" : "0 20%",
      "paddingLeft" : "1.5rem"
    }

    return (
      <Layout>
        <section className="section">
        <div className="container">
          <h1>Inaura<br></br> Studios</h1>
          <h2>Your digital zen.</h2>
          <div>We craft custom fidelity prototypes for big digital ideas.</div>
          <div style={detailsStyles}>
            <img src={Mail} style={iconStylesMail}alt=""/><a href="mailto:info@inaurastudios.com">info@inaurastudios.com</a>
            <img src={Location} style={iconStylesLocation}alt=""/><span> Located in Washington, DC </span></div>
          </div>
        </section>
        <div style={blockAnchor}></div>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
