import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import 'modern-normalize/modern-normalize.css'

import Meta from '../components/Meta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Squares from '../components/Squares'

import '../components/globalStyles.css'

export default ({ children, data }) => {
  const { siteTitle, siteUrl, socialMediaCard, headerScripts } =
    data.settingsYaml || {}
  const allPages = data.allPages.edges
    .map(edge => edge.node)
    .sort()
    .reverse()
  const globalSettings = data.globalSettings
  return (
    <Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`%s`}>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.2.0/css/all.css"
          integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
          crossorigin="anonymous"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-46463867-1"
        />
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-46463867-1');`}
        </script>
      </Helmet>

      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
      />
      <main>
        <Squares />

        <Nav allPages={allPages} globalSettings={globalSettings} />

        <Fragment>{children()}</Fragment>

        <Footer globalSettings={globalSettings} />
      </main>
    </Fragment>
  )
}

export const query = graphql`
  query IndexLayoutQuery {
    settingsYaml {
      siteTitle
      siteDescription
      headerScripts
      socialMediaCard {
        image
      }
    }
    # use filter and sort to reorder
    allPages: allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
          }
        }
      }
    }
    globalSettings: settingsYaml {
      phone
      phone2
      email
      socialMediaCard {
        image
        twitter
        facebook
        instagram
        youtube
        pintrest
      }
      warrantyLogo
    }
  }
`
