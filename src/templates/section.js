import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SectionTemplate = ({
  content,
  contentComponent,
  description,
  title,
  subtitle,
  helmet,
}) => {
  const SectionContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <h2>{subtitle}</h2>
            <p>{description}</p>
            <SectionContent content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}

SectionTemplate.propTypes = {
  content: PropTypes.node,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const Section = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SectionTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        subtitle={post.frontmatter.subtitle}
        helmet={<Helmet title={`${post.frontmatter.title} | Section`} />}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

Section.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Section

export const pageQuery = graphql`
  query SectionByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        subtitle
        description
      }
    }
  }
`
