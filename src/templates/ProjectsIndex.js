import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import Meta from '../components/Meta'
import Image from '../components/Image'
import ProjectsSection from '../components/ProjectsSection'
import BreakoutBanner from '../components/BreakoutBanner'
import CategoriesNav from '../components/CategoriesNav'

import './ProjectsIndex.css'

// Export Template for use in CMS preview
export const ProjectsIndexTemplate = ({
  meta,
  title,
  subtitle,
  featuredImage,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
  projects = [],
  categories = [],
  contentType
}) => {
  const isCategory = contentType === 'categories'
  const byCategory = project =>
    project.categories &&
    project.categories.filter(
      cat => cat.category.toLowerCase() === title.toLowerCase()
    ).length
  const filteredProjects = isCategory ? projects.filter(byCategory) : projects

  return (
    <Fragment>
      <Meta {...meta} />
      <main className="Projects">
        <div className={`PageHeader relative PageHeader--ProjectSection`}>
          {featuredImage && (
            <Image background src={featuredImage} alt={title} />
          )}
          <div className="container relative">
            <h1 className="PageHeader--Title">{title}</h1>
            {categories &&
              categories.length > 0 && (
                <div className="PageHeader--Subtitle PageHeader--CategoriesNav">
                  <CategoriesNav categories={categories} base="projects" />
                </div>
              )}
          </div>
        </div>

        {projects &&
          projects.length && (
            <ProjectsSection
              projects={filteredProjects}
              isCategory={isCategory}
            />
          )}

        {bannerImage && (
          <BreakoutBanner
            image={bannerImage}
            title={bannerTitle}
            description={bannerDescription}
            link={bannerButton}
          />
        )}
      </main>{' '}
    </Fragment>
  )
}

// Export Default ProjectsIndex for front-end
const ProjectsIndex = ({ data }) => (
  <ProjectsIndexTemplate
    {...data.page}
    {...data.page.fields}
    {...data.page.frontmatter}
    projects={data.projects.edges.map(project => ({
      ...project.node,
      ...project.node.frontmatter,
      ...project.node.fields
    }))}
    categories={data.categories.edges.map(project => ({
      ...project.node,
      ...project.node.frontmatter,
      ...project.node.fields
    }))}
  />
)

export default ProjectsIndex

export const pageQuery = graphql`
  ## Query for ProjectsIndex data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ProjectsIndex($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      fields {
        contentType
      }
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        template
        subtitle
        featuredImage {
          ...FluidImage
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

    projects: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
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
            categories {
              category
            }
            featuredImage {
              ...SmallImage
            }
          }
        }
      }
    }
    categories: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "categories" } } }
      sort: { order: ASC, fields: [frontmatter___order] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
