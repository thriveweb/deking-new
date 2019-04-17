import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import _get from 'lodash/get'
import { ChevronLeft } from 'react-feather'

import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'
import Accordion from '../components/Accordion'
import Content from '../components/Content'
import ProjectsSection from '../components/ProjectsSection'
import Button from '../components/Button'
import Image from '../components/Image'
import BackgroundVideo from '../components/BackgroundVideo'
import './SingleService.css'

export const SingleServiceTemplate = ({
  meta,
  title,
  featuredImage,
  relatedProjects,
  excerpt,
  welcomeTitle,
  welcomeDescription,
  welcomeImage,
  accordion,
  servicePriceTitle,
  QuoteTitle,
  servicePriceDescription,
  servicePods,
  videoTitle,
  videoContent,
  videoURL,
  bannerImage,
  bannerTitle,
  bannerDescription,
  bannerButton
}) => (
  <Fragment>
    <Meta {...meta} />
    <article className="SingleProject relative">
      <Link className="SingleProject--BackButton" to="/services/">
        <ChevronLeft /> BACK
      </Link>

      <PageHeader
        title={title}
        subtitle={
          excerpt &&
          (excerpt.length >= 150 ? excerpt.slice(0, 150) + '...' : excerpt)
        }
        backgroundImage={featuredImage}
        large
      />

      {welcomeTitle && (
        <div className="section WelcomeSection">
          <div className="container flex">
            <div className="one-half">
              <h2 className="afterTitle">{welcomeTitle}</h2>
              <Content src={welcomeDescription} />
            </div>
            {welcomeImage && (
              <div className="one-half">
                <div className="image-shadow-left" />
                <Image background src={welcomeImage} alt={welcomeTitle} />
              </div>
            )}
          </div>
        </div>
      )}

      {accordion &&
        accordion.length > 0 && (
          <section className="section AccordionSection">
            <div className="container">
              <Accordion items={accordion} className="" />
            </div>
          </section>
        )}

      {servicePriceTitle && (
        <section className="section PriceSection">
          <div className="PriceSection--Calculator relative">
            <svg
              className="calculator"
              width="650"
              height="800"
              viewBox="0 0 1 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.142 0H1.857A1.862 1.862 0 0 0 0 1.857v13.001c0 1.021.835 1.857 1.857 1.857h9.286A1.862 1.862 0 0 0 13 14.858V1.857A1.862 1.862 0 0 0 11.142 0zM4.336 14.063a.463.463 0 0 1-.463.463H2.606a.462.462 0 0 1-.463-.463v-.858c0-.257.207-.462.463-.462h1.267a.46.46 0 0 1 .463.462v.858zm0-2.857a.464.464 0 0 1-.463.463H2.606a.464.464 0 0 1-.463-.463v-.858c0-.256.207-.462.463-.462h1.267c.257 0 .463.206.463.462v.858zm0-2.856a.461.461 0 0 1-.463.462H2.606a.462.462 0 0 1-.463-.462v-.86c0-.256.207-.462.463-.462h1.267c.257 0 .463.207.463.462v.86zm3.26 5.713a.461.461 0 0 1-.462.462H5.866a.461.461 0 0 1-.462-.462v-.858c0-.257.207-.462.462-.462h1.268a.46.46 0 0 1 .462.462v.858zm0-2.857a.464.464 0 0 1-.462.463H5.866a.464.464 0 0 1-.462-.463v-.858c0-.256.207-.462.462-.462h1.268c.256 0 .462.206.462.462v.858zm0-2.856a.462.462 0 0 1-.462.462H5.866a.462.462 0 0 1-.462-.462v-.86c0-.256.207-.462.462-.462h1.268c.256 0 .462.207.462.462v.86zm3.186 5.688a.43.43 0 0 1-.43.431H9.17a.432.432 0 0 1-.432-.43v-3.667a.43.43 0 0 1 .432-.43h1.18a.43.43 0 0 1 .431.43v3.666zm.076-5.688a.461.461 0 0 1-.462.462H9.127a.462.462 0 0 1-.462-.462v-.86c0-.256.208-.462.462-.462h1.269c.256 0 .462.207.462.462v.86zm.284-3.986c0 .409-.334.743-.743.743H2.6a.744.744 0 0 1-.743-.743V3.065c0-.409.335-.743.743-.743h7.8c.408 0 .743.334.743.743v1.299z"
                fill="#FFF"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <div className="container flex">
            <div className="one-half">
              {servicePriceTitle && (
                <h2 className="afterTitle">{servicePriceTitle}</h2>
              )}
              {servicePriceDescription &&
                servicePriceDescription.length > 0 &&
                servicePriceDescription.map((item, index) => {
                  return (
                    <p key={item.size + index}>
                      {item.size && (
                        <Fragment>
                          <strong>Size: </strong>
                          {item.size} <br />
                        </Fragment>
                      )}
                      {item.materials && (
                        <Fragment>
                          <strong>Materials: </strong>
                          {item.materials} <br />
                        </Fragment>
                      )}
                      {item.min && (
                        <Fragment>
                          <strong>Min: </strong>
                          {item.min} <br />
                        </Fragment>
                      )}
                      {item.max && (
                        <Fragment>
                          <strong>Max: </strong>
                          {item.max} <br />
                        </Fragment>
                      )}
                    </p>
                  )
                })}
            </div>
            <div className="one-half">
              <h4>{QuoteTitle}</h4>
              <Button
                className="NavLink--Button PriceSection--Button"
                to="quote-calculator"
              >
                <svg
                  className="calculator"
                  width="13"
                  height="17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.142 0H1.857A1.862 1.862 0 0 0 0 1.857v13.001c0 1.021.835 1.857 1.857 1.857h9.286A1.862 1.862 0 0 0 13 14.858V1.857A1.862 1.862 0 0 0 11.142 0zM4.336 14.063a.463.463 0 0 1-.463.463H2.606a.462.462 0 0 1-.463-.463v-.858c0-.257.207-.462.463-.462h1.267a.46.46 0 0 1 .463.462v.858zm0-2.857a.464.464 0 0 1-.463.463H2.606a.464.464 0 0 1-.463-.463v-.858c0-.256.207-.462.463-.462h1.267c.257 0 .463.206.463.462v.858zm0-2.856a.461.461 0 0 1-.463.462H2.606a.462.462 0 0 1-.463-.462v-.86c0-.256.207-.462.463-.462h1.267c.257 0 .463.207.463.462v.86zm3.26 5.713a.461.461 0 0 1-.462.462H5.866a.461.461 0 0 1-.462-.462v-.858c0-.257.207-.462.462-.462h1.268a.46.46 0 0 1 .462.462v.858zm0-2.857a.464.464 0 0 1-.462.463H5.866a.464.464 0 0 1-.462-.463v-.858c0-.256.207-.462.462-.462h1.268c.256 0 .462.206.462.462v.858zm0-2.856a.462.462 0 0 1-.462.462H5.866a.462.462 0 0 1-.462-.462v-.86c0-.256.207-.462.462-.462h1.268c.256 0 .462.207.462.462v.86zm3.186 5.688a.43.43 0 0 1-.43.431H9.17a.432.432 0 0 1-.432-.43v-3.667a.43.43 0 0 1 .432-.43h1.18a.43.43 0 0 1 .431.43v3.666zm.076-5.688a.461.461 0 0 1-.462.462H9.127a.462.462 0 0 1-.462-.462v-.86c0-.256.208-.462.462-.462h1.269c.256 0 .462.207.462.462v.86zm.284-3.986c0 .409-.334.743-.743.743H2.6a.744.744 0 0 1-.743-.743V3.065c0-.409.335-.743.743-.743h7.8c.408 0 .743.334.743.743v1.299z"
                    fill="#FFF"
                    fillRule="evenodd"
                  />
                </svg>
                Quote Calculator
              </Button>
            </div>
          </div>
        </section>
      )}

      {servicePods &&
        servicePods.length > 0 && (
          <div className="section ServicePods">
            {servicePods.map((item, index) => (
              <div
                key={item.podsTitle + index}
                className={`container flex ServicePods--Pod ${
                  index % 2 === 0 ? 'Pod--Odd' : 'Pod--Even'
                }`}
              >
                <div className="one-half">
                  <div
                    className={`image-shadow-${
                      index % 2 === 0 ? 'right' : 'left'
                    }`}
                  />
                  <Image background src={item.podImage} alt={item.podsTitle} />
                </div>
                <div className="one-half">
                  {item.podsTitle && (
                    <h2 className="afterTitle">{item.podsTitle}</h2>
                  )}
                  {item.podDescription && (
                    <Content source={item.podDescription} />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

      {videoURL && (
        <div className="VideoSection">
          <div className="container">
            <div className="video-introduction">
              <h2>{videoTitle}</h2>
              <p>{videoContent}</p>
            </div>
            <video src={videoURL} controls />
          </div>
        </div>
      )}

      {relatedProjects &&
        relatedProjects.length > 0 && (
          <ProjectsSection
            projects={relatedProjects}
            title="Related Work"
            related
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
    </article>
  </Fragment>
)

// Export Default SingleService for front-end
const SingleService = ({ data, pathContext }) => {
  const { service, relatedProjects } = data
  // get current categories
  const currentCategory = _get(service, 'frontmatter.categories[0].category')

  // filter by category
  const filtedProjects = relatedProjects.edges.filter(edge => {
    if (
      _get(edge, `node.frontmatter.categories[0].category`) &&
      edge.node.frontmatter.categories[0].category === currentCategory
    ) {
      return true
    } else if (
      _get(edge, `node.frontmatter.categories[1].category`) &&
      edge.node.frontmatter.categories[1].category === currentCategory
    ) {
      return true
    } else if (
      _get(edge, `node.frontmatter.categories[2].category`) &&
      edge.node.frontmatter.categories[2].category === currentCategory
    ) {
      return true
    }
    return false
  })

  // const filtedProjects = relatedProjects.edges.filter(edge => {
  //   const hasCats = edge.node.frontmatter.categories
  //   for (let i in hasCats) {
  //     if (hasCats[i].category === currentCategory) {
  //       return true
  //     }
  //     return false
  //   }
  //   console.log(hasCats)
  // })

  // spread data for component
  const related = filtedProjects.map(({ node }) => {
    return {
      ...node.fields,
      ...node.frontmatter
    }
  })

  return (
    <SingleServiceTemplate
      {...service}
      {...service.frontmatter}
      relatedProjects={related}
      body={service.html}
    />
  )
}

export default SingleService

export const pageQuery = graphql`
  ## Query for SingleService data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query SingleService($id: String!) {
    service: markdownRemark(id: { eq: $id }) {
      html
      id
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        template
        featuredImage {
          ...FluidImage
        }
        excerpt
        categories {
          category
        }
        welcomeTitle
        welcomeDescription
        welcomeImage {
          ...FluidImage
        }
        accordion {
          title
          description
        }
        servicePriceTitle
        QuoteTitle
        servicePriceDescription {
          size
          materials
          min
          max
        }
        servicePods {
          podImage {
            ...FluidImage
          }
          podsTitle
          podDescription
        }
        videoTitle
        videoContent
        videoURL
        bannerImage {
          ...FluidImage
        }
        bannerTitle
        bannerDescription
        bannerButton {
          label
          link
        }
      }
    }
    relatedProjects: allMarkdownRemark(
      filter: { fields: { contentType: { eq: "projects" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
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
  }
`
