import React, { Fragment } from 'react'

import _get from 'lodash/get'

import Meta from '../components/Meta'
import Image from '../components/Image'
import Button from '../components/Button'
import CalculatorCard from '../components/CalculatorCard'
import ServiceCard from '../components/ServiceCard'
import ProjectCard from '../components/ProjectCard'
import BreakoutBanner from '../components/BreakoutBanner'

import '../components/PageHeader.css'
import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  meta,
  title,
  video,
  featureButton,
  welcomeTitle,
  welcomeButton,
  servicesTitle,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
  teamTitle,
  teamDescription,
  // imageTeam,
  teamButton,
  benefits,
  videoTitle,
  videoURL,
  videoContent,
  priceTitle,
  priceDescription,
  priceButton,
  partnersTitle,
  partnerLogos,
  services,
  projects,
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Home">
      <div className="home--banner section-image">
        <div className="background-video">
          <video
            poster="/images/uploads/11.jpg"
            id="bgvid"
            playsInline=""
            autoPlay=""
            muted=""
            loop=""
            preload="auto"
            muted
          >
            {video && video.publicURL && <source src={video.publicURL} type="video/mp4" />}
          </video>
        </div>

        {title && (
          <div className="container relative">
            <h1 id="home-title" className="PageHeader--Title afterTitle">
              {title}
            </h1>
            {featureButton && featureButton.link && (
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
              {services.map((service, index) => (
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
              {teamDescription && <p>{teamDescription}</p>}
            </div>
            <div className="one-half">
              <div className="image-shadow-right" />
              {/* {imageTeam && imageTeam.publicURL && (
                <Image background src={imageTeam.publicURL} alt={teamTitle} />
              )} */}
            </div>
          </div>
          {teamButton && teamButton.link && (
            <div className="taCenter">
              <br />
              <Button to={teamButton.link}>{teamButton.label}</Button>
            </div>
          )}
        </div>
      </div>

      {benefits && (
        <div className="section BenfitsSection noPadding">
          <div className="container">
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

      {videoURL && videoURL.publicURL && (
        <div className="VideoSection">
          <div className="container">
            <div className="video-introduction">
              <h2>{videoTitle}</h2>
              <p>{videoContent}</p>
            </div>
            <video src={videoURL.publicURL} controls />
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
              image="/images/lower-level-deck.png"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=upperLevelDeck&currentStep=1"
              title="Upper level deck"
              image="/images/upper-level-deck.png"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=poolDeck&currentStep=2"
              title="Pool deck"
              image="/images/pool-deck.png"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=roofFlyoverAttached&currentStep=1"
              title="Roof Flyover or Attached"
              image="/images/roof-flyover.png"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=upperLevelDeckPatio&currentStep=1"
              title="Upper level deck and patio roof"
              image="/images/upper-level-deck-and-patio-roof.png"
            />
            <CalculatorCard
              slug="/quote-calculator/?option=lowerLevelDeckPatio&currentStep=1"
              title="Low level deck and Patio roof"
              image="/images/low-level-deck-and-patio-roof.png"
            />
          </div>
        </div>
      </div>

      {projects && (
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

      {partnerLogos && (
        <div className="section PartnersSection thin">
          <div className="container">
            <h2 className="taCenter">{partnersTitle}</h2>
            <div className="flex">
              {partnerLogos.map((logo, index) => {
                return (
                  <a
                    key={index + logo.link}
                    className="PartnersSection--Logo"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={logo.link}
                  >
                    <Image
                      background
                      backgroundSize="contain"
                      src={logo.logo}
                      alt={partnersTitle}
                    />
                  </a>
                )
              })}
            </div>
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
    services={_get(services, 'edges') && !!_get(services, 'edges').length && services.edges.map(edge => ({
      ...edge.node.frontmatter,
      ...edge.node.fields,
    }))}
    projects={_get(projects, 'edges') && !!_get(projects, 'edges').length && projects.edges.map(edge => ({
      ...edge.node.frontmatter,
      ...edge.node.fields,
    }))}
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
        video {
          publicURL
        }
        featureButton {
          label
          # link
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
        # teamImage {
        #   ...FluidImage
        # }
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
        benefits {
          icon {
            ...SmallImage
          }
          title
          description
        }
        videoTitle
        videoURL {
          publicURL
        }
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
            # featuredImage {
            #   ...SmallImage
            # }
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
            # featuredImage {
            #   ...SmallImage
            # }
            status
            date
          }
        }
      }
    }
  }
`
