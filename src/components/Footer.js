import React, { Fragment, Component } from 'react'
import Link from 'gatsby-link'
import {
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MapPin
} from 'react-feather'

import Image from '../components/Image'
import './Footer.css'

class Footer extends React.Component {
  render() {
    const { globalSettings = {} } = this.props
    const {
      warrantyLogo,
      phone,
      phone2,
      email,
      locations,
      socialMediaCard
    } = globalSettings

    return (
      <Fragment>
        <footer className="Footer">
          <div className="section WelcomeFooter">
            <h2 className="taCenter">Where Would You Like To Start</h2>
            <div className="flex">
              {phone && (
                <a href={`tel:${phone}`} className="one-third">
                  <img
                    className="bobble"
                    src="/images/icon-phone.svg"
                    alt="phone"
                  />
                  <h3 className="Button">Call us</h3>
                  {phone}
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="one-third">
                  <img
                    className="bobble"
                    src="/images/icon-email.svg"
                    alt="phone"
                  />
                  <h3 className="Button">Email us</h3>
                  {email}
                </a>
              )}
              <a href="/quote-calculator/" className="one-third">
                <img
                  className="bobble"
                  src="/images/icon-calculator.svg"
                  alt="phone"
                />
                <h3 className="Button">Calculator</h3>
                get a quick quote
              </a>
            </div>
          </div>
          <div className="section MainFooter dark">
            <div className="container flex">
              <div className="one-third">
                {locations && <p className="one-half">{locations}</p>}
                {email && (
                  <p>
                    <span>Brisbane | Gold Coast | Sunshine Coast</span>
                    <br />
                    <a href={`mailto:${email}`}>{email}</a>
                  </p>
                )}

                <div className="socialMediaCard">
                  {socialMediaCard.twitter && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={socialMediaCard.twitter}
                    >
                      <i className="fab fa-houzz" />
                    </a>
                  )}
                  {socialMediaCard.facebook && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={socialMediaCard.facebook}
                    >
                      <Facebook />
                    </a>
                  )}
                  {socialMediaCard.instagram && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={socialMediaCard.instagram}
                    >
                      <Instagram />
                    </a>
                  )}
                  {socialMediaCard.youtube && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={socialMediaCard.youtube}
                    >
                      <Youtube />
                    </a>
                  )}
                  {socialMediaCard.pintrest && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={socialMediaCard.pintrest}
                    >
                      <MapPin />
                    </a>
                  )}
                </div>
              </div>
              <div className="one-third warrantyLogo">
                {warrantyLogo && (
                  <Image src={warrantyLogo} alt="25 year warranty" />
                )}
              </div>
              <div className="one-third taRight">
                {phone && (
                  <div className="phone-numbers taRight">
                    <div>
                      <Phone />
                      <a href={`tel:${phone}`}>{phone}</a>
                    </div>
                    <div>
                      <Phone />
                      <a href={`tel:${phone2}`}>{phone2}</a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="CopyFooter dark">
            <div className="container taCenter">
              © {new Date().getFullYear()} All rights reserved.{' '}
              <span>
                Crafted by{' '}
                <a
                  href="https://thriveweb.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Thrive
                </a>
              </span>
            </div>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer
