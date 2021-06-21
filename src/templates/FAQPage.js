import React, { Fragment } from 'react'

import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'

import './FinancePage.css'

// Export Template for use in CMS preview
export const FAQPageTemplate = ({
  meta,
  title,
  subtitle,
  faq
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Finance">
      <PageHeader
        title={title}
      />
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
    </main>
  </Fragment>
)

const FAQPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <FAQPageTemplate {...page.frontmatter} />
}

export default FAQPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        subtitle
        faq {
          title
          content
        }
      }
    }
  }
`
