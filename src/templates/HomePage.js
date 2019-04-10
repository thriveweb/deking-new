import React, { Fragment } from 'react'

import _get from 'lodash/get'

import Meta from '../components/Meta'
import Image from '../components/Image'
import Button from '../components/Button'
import CalculatorCard from '../components/CalculatorCard'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import BreakoutBanner from '../components/BreakoutBanner'
import Content from '../components/Content'
import BackgroundVideo from '../components/BackgroundVideo'
import Reviews from '../components/Reviews'

import '../components/PageHeader.css'
import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  meta,
  title,
  externalVideoURL,
  featureButton,
  featuredImage,
  welcomeTitle,
  welcomeButton,
  servicesTitle,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
  teamTitle,
  teamDescription,
  teamImage,
  teamButton,
  benefitsTitle,
  benefits,
  videoTitle,
  videoURL,
  videoPoster,
  videoContent,
  priceTitle,
  priceDescription,
  priceButton,
  partnersTitle,
  partnerLogos,
  services,
  projects,
  reviews
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Home">
      <div className="home--banner section-image">
        {externalVideoURL &&
          externalVideoURL.length && (
            <BackgroundVideo poster={videoPoster.publicURL}>
              <source src={externalVideoURL} type="video/mp4" />
            </BackgroundVideo>
          )}

        {!externalVideoURL &&
          !externalVideoURL.length &&
          videoPoster &&
          videoPoster.publicURL && (
            <Image background src={videoPoster.publicURL} alt={title} />
          )}

        {title && (
          <div className="home--banner-sidebar relative">
            <h1 id="home-title" className="PageHeader--Title afterTitle">
              {title}
            </h1>
            {featureButton &&
              featureButton.link && (
                <Button className="PageHeader--Button" to={featureButton.link}>
                  {featureButton.label}
                </Button>
              )}
          </div>
        )}
      </div>

      {welcomeTitle && (
        <div className="section dark taCenter WelcomeSection">
          <div className="container skinny">
            <h2>{welcomeTitle}</h2>
            {welcomeButton.link && (
              <Button className="PageHeader--Button" to={welcomeButton.link}>
                {welcomeButton.label}
              </Button>
            )}
          </div>
        </div>
      )}

      {services && (
        <div className="section ServicesSection">
          <div className="container taCenter">
            {servicesTitle && (
              <h2 className="ServicesSection--Title">{servicesTitle}</h2>
            )}
            <div className="ServicesSection--Grid">
              {services &&
                services.length > 0 &&
                services.map((service, index) => (
                  <ServiceCard key={service.title + index} {...service} />
                ))}
            </div>
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

      <div className="section TeamSection">
        <div className="container">
          <div className="TeamSection--Content flex">
            <div className="one-half">
              {teamTitle && <h2>{teamTitle}</h2>}
              {teamDescription && <Content src={teamDescription} />}
            </div>
            <div className="one-half">
              <div className="image-shadow-right" />
              {teamImage &&
                teamImage.publicURL && (
                  <Image background src={teamImage.publicURL} alt={teamTitle} />
                )}
            </div>
          </div>
          {teamButton &&
            teamButton.link && (
              <div className="taCenter">
                <br />
                <Button to={teamButton.link}>{teamButton.label}</Button>
              </div>
            )}
        </div>
      </div>

      {benefits &&
        benefits.length > 0 && (
          <div className="section BenfitsSection noPadding">
            <div className="container">
              <div className="taCenter">
                {benefitsTitle && (
                  <h2>
                    {benefitsTitle}
                    <br />
                    <br />
                  </h2>
                )}
              </div>
              <div className="flex three-quarters">
                {benefits.map((benefit, index) => {
                  return (
                    <div
                      key={index + benefit.title}
                      className="BenfitsSection--Benfit one-half flex relative"
                    >
                      <Image
                        background
                        className="one-quarter relative"
                        src={benefit.icon}
                        alt={benefit.title}
                        backgroundSize="contain"
                      />
                      <div className="info three-quarters">
                        <h4>{benefit.title}</h4>
                        {benefit.description}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
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

      <div className="section CalculatorSection light">
        <div className="container">
          {priceTitle && <h2 className="afterTitle">{priceTitle}</h2>}
          {priceDescription && (
            <div className="flex flex-center">
              {priceDescription}
              <Button to={priceButton.link}>{priceButton.label}</Button>
            </div>
          )}
          <br />
          <div className="CalculatorSection--Links flex">
            <CalculatorCard
              slug="/quote-calculator/?option=groundLevelDeck&currentStep=2"
              title="Ground level deck"
              image="/images/GroundLevelDeck.jpg"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=upperLevelDeck&currentStep=1"
              title="Upper level deck"
              image="/images/UpperDeckWithStairs.jpg"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=poolDeck&currentStep=2"
              title="Pool deck"
              image="/images/PoolDeck.jpg"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=roofFlyoverAttached&currentStep=1"
              title="Patio roof flyover or attached"
              image="/images/AttachedRoof.jpg"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=upperLevelDeckPatio&currentStep=1"
              title="Upper level deck and patio roof"
              image="/images/UpperDeckWithStairsAndRoof.jpg"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=lowerLevelDeckPatio&currentStep=1"
              title="Low level deck and Patio roof"
              image="/images/RoofDeck.jpg"
            />
          </div>
        </div>
      </div>

      {projects &&
        projects.lenght > 0 && (
          <div className="section ProjectsSection thin">
            <div className="container">
              <div className="flex flex-center">
                <h2>Featured Projects</h2>
              </div>
              <br />
              <div className="ProjectsSection--Grid">
                {projects.map((project, index) => (
                  <ProjectCard key={project.title + index} {...project} />
                ))}
              </div>
              <div className="flex-center flex">
                <Button to="/projects/">All projects</Button>
              </div>
            </div>
          </div>
        )}

      {partnerLogos &&
        partnerLogos.length > 0 && (
          <div className="section PartnersSection thin">
            <div className="container">
              <h2 className="taCenter">{partnersTitle}</h2>
              <div className="flex">
                {partnerLogos.map((logo, index) => {
                  return (
                    <div
                      className="PartnersSection--Logo one-quarter"
                      key={index + partnersTitle}
                    >
                      <Image
                        background
                        backgroundSize="contain"
                        src={logo.logo}
                        alt={partnersTitle}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

      {reviews &&
        reviews.length > 0 && (
          <div className="section ReviewsSection thin">
            <div className="container">
              <Reviews reviews={reviews} />
            </div>
          </div>
        )}
    </main>
  </Fragment>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page, services, projects } }) => (
  <HomePageTemplate
    {...page.frontmatter}
    content={page.rawMarkdownBody}
    services={
      _get(services, 'edges') &&
      !!_get(services, 'edges').length &&
      services.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))
    }
    projects={
      _get(projects, 'edges') &&
      !!_get(projects, 'edges').length &&
      projects.edges.map(edge => ({
        ...edge.node.frontmatter,
        ...edge.node.fields
      }))
    }
  />
)
export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      ...Meta
      frontmatter {
        title
        featuredImage {
          ...FluidImage
        }
        externalVideoURL
        videoPoster {
          publicURL
        }
        featureButton {
          label
          link
        }
        welcomeTitle
        welcomeButton {
          label
          link
        }
        servicesTitle
        bannerTitle
        bannerDescription
        bannerImage {
          ...FluidImage
        }
        teamImage {
          ...FluidImage
        }

        bannerButton {
          label
          link
        }
        teamTitle
        teamDescription
        teamButton {
          label
          link
        }
        benefitsTitle
        benefits {
          icon {
            ...SmallImage
          }
          title
          description
        }
        videoTitle
        videoURL
        videoContent
        priceTitle
        priceDescription
        priceButton {
          label
          link
        }
        partnersTitle
        partnerLogos {
          logo {
            ...SmallImage
          }
          link
        }
        reviews {
          title
          details
          by
        }
      }
    }
    services: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "services" } }
        frontmatter: { status: { regex: "/Featured/i" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              ...SmallImage
            }
            status
            date
          }
        }
      }
    }
    projects: allMarkdownRemark(
      filter: {
        fields: { contentType: { eq: "projects" } }
        frontmatter: { status: { regex: "/Featured/i" } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredImage {
              ...SmallImage
            }
            status
            date
          }
        }
      }
    }
  }
`
