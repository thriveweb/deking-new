import React, { Fragment } from 'react'

import { MapPin, Smartphone, Mail } from 'react-feather'

import Meta from '../components/Meta'
import PageHeader from '../components/PageHeader'
import EnquiryFormSimple from '../components/EnquiryFormSimple'
import SimpleMap from '../components/SimpleMap'
import Content from '../components/Content'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  meta,
  title,
  subtitle,
  featuredImage,
  locationTitle,
  locations,
  otherLocationTitle,
  otherLocation
}) => (
  <Fragment>
    <Meta {...meta} />
    <main className="Contact">
      <PageHeader
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
        large
      />

      <div className="section Contact">
        <div className="container Contact--Section">
          <div>
            {locationTitle && <h2>{locationTitle}</h2>}
            <div className="Contact--Details flex">
              {locations &&
                locations.length > 0 &&
                locations.map((location, index) => {
                  return (
                    <div
                      key={index + location.title}
                      className="Contact--Details-locations"
                    >
                      {location.title && <h3>{location.title}</h3>}
                      {location.phone && (
                        <p>
                          <span className="red">Call</span>
                          <a href={`tel:${location.phone}`}>{location.phone}</a>
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
            <div className="Contact--Details Contact--otherLocation">
              {otherLocationTitle && <h3>{otherLocationTitle}</h3>}
              {otherLocation &&
                otherLocation.length > 0 &&
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

          <div>
            <EnquiryFormSimple name="Simple Form" />
          </div>
        </div>
      </div>
      {locations && locations.length > 0 && <SimpleMap locations={locations} />}
    </main>
  </Fragment>
)

// for non perview gatsby
const ContactPage = ({ data }) => {
  const { markdownRemark: page } = data

  return (
    //de-structure the query data
    <ContactPageTemplate
      body={page.rawMarkdownBody}
      // inject all page frontmatter props
      {...page.frontmatter}
    />
  )
}

export default ContactPage

// Query for DefaultPage data
// Use GraphiQL interface (http://localhost:8000/___graphql)
// ID is processed via gatsby-node.js
export const pageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      rawMarkdownBody
      ...Meta
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
          lat
          lng
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
