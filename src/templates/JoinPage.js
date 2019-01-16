import React, { Fragment } from 'react'

import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'

// Export Template for use in CMS preview
export const JoinPageTemplate = ({
  meta,
  title,
  subtitle,
  featuredImage,
  join,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Join">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
        split
      />
      {join.title && (
        <div className="section">
          <div className="container">
            <h2 className="taCenter">{join.title}</h2>
            <p>{join.content}</p>
          </div>
        </div>
      )}

      {bannerImage && (
        <BreakoutBanner
          image={bannerImage}
          title={bannerTitle}
          description={bannerDescription}
          link={bannerButton}
        />
      )}
    </main>
  </Fragment>
)

const JoinPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <JoinPageTemplate {...page.frontmatter} />
}

export default JoinPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query JoinPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
        join {
          title
          content
        }
        bannerTitle
        bannerDescription
        bannerImage {
          ...FluidImage
        }
        bannerButton {
          label
          link
        }
      }
    }
  }
`
