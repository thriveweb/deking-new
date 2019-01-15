import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import { Twitter, Facebook, Instagram, Youtube } from 'react-feather'

import SubscribeForm from '../components/SubscribeForm'
// import Button from '../components/Button'
import './Footer.css'

export default ({ globalSettings = {}, ...props }) => {
  const {
    phone,
    phone2,
    email,
    locations,
    socialMediaCard,
    subscribeFormTitle
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
            <a href="/quote-calculator" className="one-third">
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
            <div className="two-thirds flex">
              {locations && <p className="one-half">{locations}</p>}
              {email && (
                <p className="one-half">
                  <span>Brisbane | Gold Coast | Sunshine Coast</span>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              )}
              {phone && (
                <p className="one-half phone-numbers">
                  <a href={`tel:${phone}`}>{phone}</a>
                  <a href={`tel:${phone2}`}>{phone2}</a>
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
              </div>
            </div>
            <div className="one-third flex">
              // <h4>{subscribeFormTitle}</h4>
              // <SubscribeForm />
            </div>
          </div>
        </div>
        <div className="CopyFooter dark">
          <div className="container taCenter">
            © 2017 All rights reserved.
            <p>
              Crafted by{' '}
              <a
                href="https://thriveweb.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                Thrive
              </a>
            </p>
          </div>
        </div>
      </footer>
    </Fragment>
  )
}
