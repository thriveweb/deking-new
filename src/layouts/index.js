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
        <html lang="en" />
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

        <script>
          {`!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '198898540694859');
          fbq('track', 'PageView');`}
        </script>

        <noscript>
          {`<img
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=198898540694859&ev=PageView&noscript=1"
          />`}
        </noscript>
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
