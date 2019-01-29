import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import _get from 'lodash/get'

import { MapPin, Smartphone, Mail, AlertTriangle } from 'react-feather'

import PageHeader from '../../components/PageHeader'
import EnquiryFormSimple from '../../components/EnquiryFormSimple'
import Content from '../../components/Content'
import '../../templates/ContactPage.css'

export const Thanks = ({ data }) => {
  const {
    title,
    subtitle,
    featuredImage,
    locationTitle,
    locations,
    otherLocationTitle,
    otherLocation
  } = data.contact.frontmatter
  return (
    <Fragment>
      <main className="Contact">
        <PageHeader
          title={title}
          subtitle={subtitle}
          backgroundImage={featuredImage}
          large
        />

        <Helmet>
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
        </Helmet>

        <div className="section Contact">
          <div className="container Contact--Section">
            <div className="EnquiryForm">
              <h2>Success</h2>
              <p>
                Thanks for contacting us! We will get in touch with you shortly.
              </p>
            </div>
            <div>
              {locationTitle && <h2>{locationTitle}</h2>}
              <div className="Contact--Details flex">
                {locations &&
                  locations.map((location, index) => {
                    return (
                      <div
                        key={index + location.title}
                        className="Contact--Details-locations one-third"
                      >
                        {location.title && <h3>{location.title}</h3>}
                        {location.phone && (
                          <p>
                            <span className="red">Call</span>
                            <a href={`tel:${location.phone}`}>
                              {location.phone}
                            </a>
                          </p>
                        )}
                        {location.fax && (
                          <p>
                            <span className="red">Fax</span>
                            {location.fax}
                          </p>
                        )}
                        {location.address && (
                          <p>
                            <span className="red">Address</span>
                            {location.address}
                          </p>
                        )}
                        {location.mapLink && (
                          <a
                            target="_blank"
                            rel="nofollow"
                            href={location.mapLink}
                          >
                            <MapPin />
                            View map
                          </a>
                        )}
                      </div>
                    )
                  })}
              </div>
              <div id="Success" className="Contact--Details">
                {otherLocationTitle && <h3>{otherLocationTitle}</h3>}
                {otherLocation &&
                  otherLocation.map((otherLocation, index) => {
                    return (
                      <div
                        key={index + otherLocation.phone}
                        className="Contact--Details-locations flex one-half"
                      >
                        {otherLocation.phone && (
                          <p>
                            <span className="red">Call</span>
                            <a href={`tel:${otherLocation.phone}`}>
                              {otherLocation.phone}
                            </a>
                          </p>
                        )}
                        {otherLocation.email && (
                          <p>
                            <span className="red">Email</span>
                            <a href={`mailto:${otherLocation.email}`}>
                              {otherLocation.email}
                            </a>
                          </p>
                        )}
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default Thanks

export const pageQuery = graphql`
  query ThanksPage {
    contact: markdownRemark(fields: { slug: { regex: "/contact/" } }) {
      frontmatter {
        title
        template
        subtitle
        featuredImage {
          ...FluidImage
        }
        locationTitle
        locations {
          title
          phone
          fax
          address
          mapLink
        }
        otherLocationTitle
        otherLocation {
          email
          phone
        }
      }
    }
  }
`
