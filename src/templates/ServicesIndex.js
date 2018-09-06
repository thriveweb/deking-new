import React, { Fragment } from 'react'

import PageHeader from '../components/PageHeader'
import ServicesSection from '../components/ServicesSection'

// Export Template for use in CMS preview
export const ServicesIndexTemplate = ({
  title,
  subtitle,
  featuredImage,
  services = [],
}) => (
  <Fragment>
    <main className="Home">
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      {!!services.length && <ServicesSection services={services} />}
    </main>
  </Fragment>
)

// Export Default ServicesIndex for front-end
const ServicesIndex = ({ data }) => {
  const { page, services } = data
  return (
    <ServicesIndexTemplate
      title={page.frontmatter.title}
      subtitle={page.frontmatter.subtitle}
      featuredImage={page.frontmatter.featuredImage}
      // pull frontmatter to root of post
      services={services.edges.map(post => ({
        ...post.node,
        ...post.node.frontmatter,
        ...post.node.fields,
      }))}
    />
  )
}

export default ServicesIndex

export const pageQuery = graphql`
  ## Query for ServicesIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ServicesIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        template
        subtitle
        featuredImage {
          ...FluidImage
        }
      }
    }

    services: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "services" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              ...FluidImage
            }
          }
        }
      }
    }
  }
`
