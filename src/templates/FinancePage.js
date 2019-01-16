import React, { Fragment } from 'react'

import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'
import Image from '../components/Image'

import './FinancePage.css'

// Export Template for use in CMS preview
export const FinancePageTemplate = ({
  meta,
  title,
  subtitle,
  featuredImage,
  welcomeTitle,
  welcomeDescription,
  welcomeImage,
  faq,
  learnMore,
  learnMoreImage,
  learnMoreLink
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Finance">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
        split
      />

      <div className="section WelcomeSection">
        <div className="container flex">
          {welcomeImage && (
            <div className="one-half">
              <div className="image-shadow-right" />
              <Image background src={welcomeImage} alt={welcomeTitle} />
            </div>
          )}
          <div className="one-half">
            {welcomeTitle && <h2 className="afterTitle">{welcomeTitle}</h2>}
            {welcomeDescription && <p>{welcomeDescription}</p>}
          </div>
        </div>
      </div>

      {faq &&
        faq.length > 0 && (
          <div className="section FAQ">
            <div className="container">
              {faq.map((item, index) => {
                return (
                  <div key={item.title + index} className="FAQ--Item">
                    <h3>{item.title}</h3>
                    <p>{item.content}</p>
                    <div className="afterTitle" />
                  </div>
                )
              })}
            </div>
          </div>
        )}

      {learnMore && (
        <div className="section LearnMore">
          <div className="container flex">
            <div className="one-half">
              {learnMore &&
                learnMoreLink && (
                  <h3>
                    <a href={learnMoreLink}>{learnMore}</a>
                  </h3>
                )}
            </div>
            <div className="one-half relative">
              {learnMoreImage &&
                learnMoreLink && (
                  <a href={learnMoreLink} className="LearnMore--Image">
                    <Image
                      background
                      backgroundSize="contain"
                      src={learnMoreImage}
                      alt="LearnMore"
                    />
                  </a>
                )}
            </div>
          </div>
        </div>
      )}
    </main>
  </Fragment>
)

const FinancePage = ({ data }) => {
  const { markdownRemark: page } = data
  return <FinancePageTemplate {...page.frontmatter} />
}

export default FinancePage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query FinancePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        subtitle
        featuredImage {
          ...FluidImage
        }
        welcomeTitle
        welcomeDescription
        welcomeImage {
          ...FluidImage
        }
        faq {
          title
          content
        }
        learnMore
        learnMoreImage {
          ...FluidImage
        }
        learnMoreLink
      }
    }
  }
`
