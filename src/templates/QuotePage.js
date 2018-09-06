import React, { Fragment } from 'react'

import QuoteCalculator from '../components/QuoteCalculator'

import './QuotePage.css'

// Export Template for use in CMS preview
export const QuoteTemplate = ({ title }) => (
  <Fragment>
    <main className="Quote">
      <QuoteCalculator />
    </main>
  </Fragment>
)

// Export Default Quote for front-end
const Quote = ({ data: { page, services, projects } }) => (
  <QuoteTemplate {...page.frontmatter} />
)
export default Quote

export const pageQuery = graphql`
  ## Query for Quote data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query Quote($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
      }
    }
  }
`
