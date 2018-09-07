import React, { Fragment } from 'react'

import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'

// import './ProcessPage.css'

// Export Template for use in CMS preview
export const GuaranteesPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  guarantees,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
}) => (
  <Fragment>
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
            <h2 className="taCenter">{guarantees.title}</h2>
            <p>{guarantees.content}</p>
          </div>
        </div>

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

const GuaranteesPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <GuaranteesPageTemplate {...page.frontmatter} />
}

export default GuaranteesPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query GuaranteesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
        subtitle
        # featuredImage {
        #   ...FluidImage
        # }
        guarantees {
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
