import React, { Fragment } from 'react'

import PageHeader from '../components/PageHeader'
import BreakoutBanner from '../components/BreakoutBanner'
import TeamCard from '../components/TeamCard'

import './TeamPage.css'

// Export Template for use in CMS preview
export const TeamPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  welcomeQuote,
  teamMembers,
  bannerTitle,
  bannerDescription,
  bannerImage,
  bannerButton,
}) => (
  <Fragment>
    <main className="Team">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
        split
      />
      {welcomeQuote && (
        <div className="section WelcomeQuote">
          <div className="container">
            <blockquote>
              <p>{welcomeQuote}</p>
            </blockquote>
          </div>
        </div>
      )}
      {teamMembers && (
        <div className="section TeamMembers">
          <div className="container flex TeamMembers--Container">
            {teamMembers.map((member, index) => {
              return <TeamCard key={member + index} member={member} />
            })}
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
    </main>
  </Fragment>
)

const TeamPage = ({ data }) => {
  const { markdownRemark: page } = data
  return <TeamPageTemplate {...page.frontmatter} />
}

export default TeamPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query TeamPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      frontmatter {
        title
        subtitle
        # featuredImage {
        #   ...FluidImage
        # }
        welcomeQuote
        teamMembers {
          name
          profileImage {
            ...SmallImage
          }
          profileImage2 {
            ...SmallImage
          }
          occupation
          bio
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
  }
`
