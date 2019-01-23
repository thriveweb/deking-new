import React, { Fragment } from 'react'

import Meta from '../components/Meta'
import Image from '../components/Image'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'
import './AboutPage.css'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
  meta,
  title,
  subtitle,
  featuredImage,
  welcomeTitle,
  welcomeDescription,
  welcomeImage,
  welcomeButton,
  whatWeDoTitle,
  whatWeDo,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
  qualificationsTitle,
  qualificationsLogos
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="About">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
      />
      <div className="section WelcomeSection">
        <div className="container flex">
          <div className="one-half">
            {welcomeTitle && <h2 className="afterTitle">{welcomeTitle}</h2>}
            {welcomeDescription && <p>{welcomeDescription}</p>}
            {welcomeButton.link && (
              <Button className="" to={welcomeButton.link}>
                {welcomeButton.label}
              </Button>
            )}
          </div>
          {welcomeImage && (
            <div className="one-half">
              <Image background src={welcomeImage} alt={welcomeTitle} />
            </div>
          )}
        </div>
      </div>

      <div className="section BenfitsSection">
        <div className="container">
          <h2 className="taCenter">{whatWeDoTitle}</h2>
          <div className="flex">
            {whatWeDo &&
              whatWeDo.length > 0 &&
              whatWeDo.map((what, index) => {
                return (
                  <div
                    key={index + what.title}
                    className="BenfitsSection--Benfit one-third flex relative"
                  >
                    <Image
                      background
                      backgroundSize="contain"
                      className="one-quarter relative"
                      src={what.icon}
                      alt={what.title}
                    />
                    <div className="info three-quarters">
                      <h4>{what.title}</h4>
                      {what.description}
                    </div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
      {bannerImage && (
        <BreakoutBanner
          image={bannerImage}
          title={bannerTitle}
          description={bannerDescription}
          link={bannerButton}
        />
      )}
      <div className="section PartnersSection">
        <div className="container">
          <h2 className="taCenter">{qualificationsTitle}</h2>
          <div className="flex">
            {qualificationsLogos &&
              qualificationsLogos.length > 0 &&
              qualificationsLogos.map((logo, index) => {
                return (
                  <a
                    key={index + logo.link}
                    className="PartnersSection--Logo one-quarter"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={logo.link}
                  >
                    <Image
                      background
                      backgroundSize="contain"
                      src={logo.logo}
                      alt="logos"
                    />
                  </a>
                )
              })}
          </div>
        </div>
      </div>
    </main>
  </Fragment>
)
const AboutPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <AboutPageTemplate {...page.frontmatter} />
}

export default AboutPage
// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query AboutPage($id: String!) {
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
        welcomeButton {
          label
          link
        }
        whatWeDoTitle
        whatWeDo {
          icon {
            ...SmallImage
          }
          title
          description
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
        qualificationsTitle
        qualificationsLogos {
          logo {
            ...SmallImage
          }
          link
        }
      }
    }
  }
`
