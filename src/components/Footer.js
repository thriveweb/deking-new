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
                  <h3>Call Us</h3>
                  <span className="details">{phone}</span>
                </a>
              )}
              {email && (
                <a href={`mailto:${email}`} className="one-third">
                  <img
                    className="bobble"
                    src="/images/icon-email.svg"
                    alt="phone"
                  />
                  <h3>Email Us</h3>
                  <span className="details">{email}</span>
                </a>
              )}
              <a href="/quote-calculator/" className="one-third">
                <img
                  className="bobble"
                  src="/images/icon-calculator.svg"
                  alt="phone"
                />
                <h3>Calculator</h3>
                <span className="details">Get a Quick Quote</span>
              </a>
            </div>
          </div>
          <div className="MainFooter dark">
            <div className="flex">
              <div className="section one-third midDark">
                {warrantyLogo && (
                  <div className="warrantyLogo"><Image src={warrantyLogo} alt="25 year warranty" /></div>
                )}                
                <h4>SERVICE AREAS</h4>
                  <ul>
                    <li>Brisbane, Northside, Southside, Redlands,</li>
                    <li>Logan, Ipswich, Moreton Bay, Gold Coast,</li>
                    <li>Sunshine Coast, Toowoomba</li>
                  </ul>

              </div>
              <div className="section flex two-thirds">
                <div className="one-third">
                  <h4>CONTACT</h4>
                  <ul>
                    <li><a href={`tel:${phone}`}>{phone}</a></li>
                    <li><a href={`tel:${phone2}`}>{phone2}</a></li>
                    <li>PO Box 54, Camp Hill, 4152</li>
                  </ul>

                  <h4>LOCATION</h4>
                  <ul>
                    <li>Deking Decks Brisbane</li>
                    <li>Unit 13/22 Mavis Court</li>
                    <li>Ormeau QLD 4208</li>
                  </ul>
                </div>
                <div className="one-third">
                  <h4>OUR SERVICES</h4>
                  <ul>
                    <li>Timber Decks</li>
                    <li>Patio Roofs</li>
                    <li>Pool Decking</li>
                    <li>Projects</li>
                    <li>Calculator</li>
                    <li>6 Step Process</li>
                  </ul>
                </div>
                <div className="one-third">
                  <h4>ABOUT</h4>
                  <ul>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>Privacy Policy</li>
                  </ul>
                  <h4>CONNECT</h4>
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
              </div>
            </div>
          </div>
          <div className="CopyFooter dark flex">
            <div className="one-half text">
              © {new Date().getFullYear()} DeKing Decks | All Rights Reserved.{' '}
            </div>
            <div className="one-half taRight text">
              Site by{' '}
              <a
                href="https://thriveweb.com.au"
                target="_blank"
                rel="nofollow"
              >
                Thrive
                </a>
            </div>
          </div>
        </footer>
      </Fragment>
    )
  }
}

export default Footer
