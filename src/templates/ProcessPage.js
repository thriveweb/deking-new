import React, { Fragment } from 'react'

import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'
import ProcessAccordion from '../components/ProcessAccordion'

import './ProcessPage.css'

// Export Template for use in CMS preview
export const ProcessPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  processes,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
}) => (
  <Fragment>
    <main className="Process">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
        split
      />

      {processes && (
        <div className="section FAQ">
          <div className="container">
            <ProcessAccordion items={processes} className="" />
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

const ProcessPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <ProcessPageTemplate {...page.frontmatter} />
}

export default ProcessPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query ProcessPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
        subtitle
        # featuredImage {
        #   ...FluidImage
        # }
        processes {
          title
          content
          link {
            publicURL
          }
          buttonText
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
