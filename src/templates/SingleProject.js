import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _get from 'lodash/get'
import { ChevronLeft } from 'react-feather'

import Accordion from '../components/Accordion'
import Image from '../components/Image'
import Content from '../components/Content'
import Gallery from '../components/Gallery'
import PageHeader from '../components/PageHeader'
import './SingleProject.css'

export const SingleProjectTemplate = ({
  title,
  date,
  featuredImage,
  excerpt,
  gallery,
  body,
  accordion,
  feedback,
  nextProjectURL,
  prevProjectURL,
  categories = [],
}) => (
  <Fragment>
    <article className="SingleProject relative">
      <Link className="SingleProject--BackButton" to="/projects/">
        <ChevronLeft /> BACK
      </Link>
      <PageHeader
        title={title}
        subtitle={
          excerpt.length >= 150 ? excerpt.slice(0, 150) + '...' : excerpt
        }
        backgroundImage={featuredImage}
        large
      />
      {!!gallery.length && <Gallery images={gallery} alt={title} />}
      <section className="section">
        <div className="container flex">
          <div className="one-half">
            <h2 className="afterTitle">About the project</h2>
            <Content source={body} />
          </div>
          <div className="one-half">
            {!!accordion && <Accordion items={accordion} className="" />}
          </div>
        </div>
      </section>
      {feedback && (
        <section className="section ClientFeedback">
          <div className="container flex">
            <h2 className="ClientFeedback--MainTitle afterTitle">
              Client <br /> Feedback
            </h2>
            <div className="ClientFeedback--Content flex">
              <div className="profilePic">
                {_get(feedback, `[0]`) && feedback[0].image && (
                  <Image
                    background
                    src={feedback[0].image}
                    alt={feedback[0].title}
                  />
                )}
              </div>
              <div className="info">
                {_get(feedback, `[0]`) && <h3 className="afterTitle">{feedback[0].title}</h3>}
                {_get(feedback, `[0].description`) && feedback[0].description && <p>{feedback[0].description}</p>}
                {_get(feedback, `[0].from`) && feedback[0].from && <small> - {feedback[0].from}</small>}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section SingleProject--Pagination">
        <div className="container">
          {prevProjectURL && (
            <Link
              className="SingleProject--Pagination--Link prev"
              to={prevProjectURL}
            >
              Previous Project
            </Link>
          )}

          <Link to="/contact/" className="Button">
            Contact us
          </Link>

          {nextProjectURL && (
            <Link
              className="SingleProject--Pagination--Link next"
              to={nextProjectURL}
            >
              Next Project
            </Link>
          )}
        </div>
      </section>
    </article>
  </Fragment>
)

// Export Default SingleProject for front-end
const SingleProject = ({ data, pathContext }) => {
  const { project, allProjects } = data
  const thisEdge = allProjects.edges.find(edge => edge.node.id === project.id)
  return (
    <SingleProjectTemplate
      {...project}
      {...project.frontmatter}
      body={project.html}
      nextProjectURL={_get(thisEdge, 'next.fields.slug')}
      prevProjectURL={_get(thisEdge, 'previous.fields.slug')}
    />
  )
}

export default SingleProject

export const pageQuery = graphql`
  ## Query for SingleProject data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleProject($id: String!) {
    project: markdownRemark(id: { eq: $id }) {
      html
      id
      frontmatter {
        template
        title
        # featuredImage {
        #   ...FluidImage
        # }
        excerpt
        # gallery {
        #   # image {
        #   #   ...CroppedImage
        #   # }
        # }
        accordion {
          title
          description
        }
        feedback {
          # image {
          #   ...SmallImage
          # }
          title
          description
          from
        }
      }
    }
    allProjects: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
        }
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
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
