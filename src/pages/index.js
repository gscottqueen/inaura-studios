import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade';
import Layout from '../components/Layout'
import '../components/layout.css'
import arrowUp from '../img/if_ic_keyboard_arrow_up_48px_352469.svg'
import arrowDown from '../img/if_ic_keyboard_arrow_down_48px_352466.svg'


const buttonDown = {
  "position" : "absolute", 
  "bottom" : "0", 
  "right" : "0", 
  "zIndex" : "99",
  "background" : "black",
  "color" : "white",
  "border" : "none",
  "padding" : "10px",
  "backgroundImage" : "url(" + arrowDown + ")",
  "backgroundRepeat" : "no-repeat",
  "backgroundPositionX" : "15px",
  "backgroundPositionY" : "center",
  "backgroundSize" : "25px",
  "width" : "50px",
  "height" : "50px",
  "cursor" : "pointer"
}

const buttonUp = {
  "position" : "absolute", 
  "bottom" : "55px", 
  "right" : "0", 
  "zIndex" : "99",
  "background" : "black",
  "color" : "white",
  "border" : "none",
  "padding" : "10px",
  "backgroundImage" : "url(" + arrowUp + ")",
  "backgroundRepeat" : "no-repeat",
  "backgroundPositionX" : "15px",
  "backgroundPositionY" : "center",
  "backgroundSize" : "25px",
  "width" : "50px",
  "height" : "50px",
  "cursor" : "pointer"
}

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
      posts: this.props.data.allMarkdownRemark.edges,
      index: 0
    }
  }

  incrementUp = () => {
    let i = this.state.index
    
    if ( i < (this.state.posts.length - 1) ) {
      this.setState(() => {
        return {index: i + 1}
      })
    }
  }

  incrementDown = () => {
    let i = this.state.index
    
    if ( i > 0 ) {
      this.setState(() => {
        return {index: i - 1}
      })
    }
  }

  render() {

    return (
      <Layout>
          <section 
            className="landing"
            key={this.state.posts[this.state.index].node.id}
            id={`${this.state.posts[this.state.index].node.id}`}
            data-order={`${this.state.posts[this.state.index].node.frontmatter.order}`}
          >
            <Fade duration={2000} effect="fadeInUp" bottom><h1 className="title">{this.state.posts[this.state.index].node.frontmatter.title}</h1></Fade>
            <Fade duration={2000} effect="fadeInUp" bottom><h2 className="sub-title">{this.state.posts[this.state.index].node.frontmatter.subtitle}</h2></Fade>
            <Fade duration={2000} effect="fadeInUp" bottom><p className="description">{this.state.posts[this.state.index].node.frontmatter.description}</p></Fade>
            <Fade duration={2000} effect="fadeInUp" bottom><div className="Shiz" dangerouslySetInnerHTML={ {__html: this.state.posts[this.state.index].node.html} } /></Fade>
          </section>
          <button
          style={buttonUp}
          onClick={
          (event) => {
            event.preventDefault()
            event.stopPropagation()
            this.incrementDown()
            }
          }/>
          <button
          style={buttonDown}
          onClick={
          (event) => {
            event.preventDefault()
            event.stopPropagation()
            this.incrementUp()
            }
          }/>
    </Layout>
    )
  }

  newMethod() {
    return this.handleScroll;
  }
}

export default IndexPage;

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
    sort: { order: ASC, fields: [frontmatter___order] },
    filter: { frontmatter: { templateKey: { eq: "section" } }}
  ) {
    edges {
      node {
        id
        html
        frontmatter {
          templateKey
          title
          subtitle
          description
          order
        }
      }
    }
  }
}
`