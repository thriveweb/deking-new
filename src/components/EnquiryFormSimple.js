import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { navigateTo } from 'gatsby-link'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Recaptcha from 'react-google-recaptcha'

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

import './EnquiryForm.css'

function encode(data) {
  const formData = new FormData()

  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }

  return formData
}

export default class Contact extends React.Component {
  state = {
    uploading: false
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addNotification() {
    this.notificationDOMRef.addNotification({
      title: 'Error. Please check you file size.',
      message: ' Max upload is set to 5MB.',
      type: 'danger',
      insert: 'bottom',
      container: 'top-left',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismissable: { click: true }
    })
  }

  handleAttachment = e => {
    if (e.target.files[0].size >= 5000000) {
      this.addNotification()
      e.target.value = null
    } else {
      this.setState({ [e.target.name]: e.target.files[0] })
    }
  }

  handleRecaptcha = value => {
    this.setState({ 'g-recaptcha-response': value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    this.setState({ uploading: true })
    fetch('/', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => this.setState({ uploading: false }))
      .then(() => navigateTo(form.getAttribute('action')))
      .catch(error => {
        this.setState({ uploading: false })
        alert(error)
      })
  }

  render() {
    return (
      <div className="EnquiryForm">
        <form
          name="file-upload-contact"
          method="post"
          action="/contact/thanks/"
          data-netlify="true"
          data-netlify-recaptcha="true"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="file-upload-contact" />
          {/* <ReactNotification ref={input => (this.notificationDOMRef = input)} /> */}

          <div className="flex">
            <label className="EnquiryForm--Label">
              Your Full name
              <br />
              <input
                type="text"
                name="name"
                className="EnquiryForm--Input"
                required
                onChange={this.handleChange}
              />
            </label>

            <label className="EnquiryForm--Label">
              Phone number
              <br />
              <input
                type="text"
                name="phone"
                className="EnquiryForm--Input"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <label className="EnquiryForm--Label">
            Email address
            <br />
            <input
              type="email"
              name="email"
              className="EnquiryForm--Input"
              required
              onChange={this.handleChange}
            />
          </label>
          <div className="flex">
            <label className="EnquiryForm--Label">
              Suburb
              <br />
              <input
                type="text"
                name="suburb"
                className="EnquiryForm--Input"
                required
                onChange={this.handleChange}
              />
            </label>

            <label className="EnquiryForm--Label">
              Postcode
              <br />
              <input
                type="text"
                name="postCode"
                className="EnquiryForm--Input"
                required
                onChange={this.handleChange}
              />
            </label>
          </div>

          <label className="EnquiryForm--Label">
            Message <br />
            <textarea
              className="EnquiryForm--Input EnquiryForm--Textarea"
              name="message"
              rows="10"
              required
              onChange={this.handleChange}
            />
          </label>

          <div className="flex">
            <label className="EnquiryForm--Label">
              File:
              <br />
              <input
                className="EnquiryForm--Input EnquiryForm--File"
                type="file"
                name="attachment"
                onChange={this.handleAttachment}
              />
            </label>
            <label className="EnquiryForm--Label">
              Do you have a set of plans or a sketch that you would like us to
              quote for you? Max file size 5mb.
            </label>
          </div>

          <label className="EnquiryForm--Label EnquiryForm--Checkbox">
            <input
              type="checkbox"
              name="subscribe"
              defaultChecked="true"
              onChange={this.handleChange}
            />
            Please include me in your mailing list
          </label>
          <br />
          <Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />
          <input
            className="Button EnquiryForm--SubmitButton"
            type="submit"
            value="Enquire"
          />
        </form>
        {this.state.uploading && (
          <div className="loading">
            <img src="/images/full.gif" alt="sending" />
          </div>
        )}
      </div>
    )
  }
}
