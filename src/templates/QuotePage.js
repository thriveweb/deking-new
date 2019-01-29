import React, { Fragment } from 'react'

import Meta from '../components/Meta'
import QuoteCalculator from '../components/QuoteCalculator'

import './QuotePage.css'

// Export Template for use in CMS preview
export const QuoteTemplate = ({ meta, title, globalSettings }) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Quote">
      <QuoteCalculator globalSettings={globalSettings} />
    </main>
  </Fragment>
)

// Export Default Quote for front-end
const Quote = ({ data: { page, services, projects, globalSettings } }) => (
  <QuoteTemplate {...page.frontmatter} globalSettings={globalSettings} />
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
      ...Meta
      frontmatter {
        title
      }
    }
    globalSettings: settingsYaml {
      phone
      phone2
    }
  }
`
