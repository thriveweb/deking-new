import React, { Fragment } from 'react'

import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'
import Content from '../components/Content'

// Export Template for use in CMS preview
export const PrivacyPolicyPageTemplate = ({
  meta,
  title,
  subtitle,
  featuredImage,
  privarypolicy
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Guarantees">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
        split
      />

      <div className="section">
        <div className="container">
          <h2 className="taCenter">{privarypolicy.title}</h2>
          <Content src={privarypolicy.content} />
        </div>
      </div>

    </main>
  </Fragment>
)

const PrivacyPolicyPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <PrivacyPolicyPageTemplate {...page.frontmatter} />
}

export default PrivacyPolicyPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query PrivacyPolicyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
        privarypolicy {
          title
          content
        }
      }
    }
  }
`
