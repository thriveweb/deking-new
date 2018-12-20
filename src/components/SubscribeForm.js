import React from 'react'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './EnquiryForm.css'
import './SubscribeForm.css'

class SubscribeForm extends React.Component {
  static defaultProps = {
    name: 'Subscribe Form',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Success! You are subscribed.',
    errorMessage: 'There is a problem, your have not subscribed to our list.'
  }

  state = {
    alert: '',
    disabled: false,
    success: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          success: true,
          disabled: true
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <div className="SubscribeForm-wrap">
        {this.state.success && (
          <div className="">{this.props.successMessage}</div>
        )}
        {!this.state.success && (
          <form
            className="SubscribeForm"
            name={name}
            action={action}
            onSubmit={this.handleSubmit}
            data-netlify=""
            data-netlify-honeypot="confirmEmail"
          >
            {this.state.alert && (
              <div className="EnquiryForm--Alert">{this.state.alert}</div>
            )}
            <label className="EnquiryForm--Label">
              <input
                className="EnquiryForm--Input"
                type="email"
                placeholder="Email"
                name="email"
                required
              />
            </label>
            <input
              type="text"
              name="confirmEmail"
              style={{ display: 'none' }}
            />
            {!!subject && (
              <input type="hidden" name="subject" value={subject} />
            )}
            <input type="hidden" name="form-name" value={name} />
            <input
              className="Button EnquiryForm--SubmitButton"
              type="submit"
              value="Subscribe"
              disabled={this.state.disabled}
            />
          </form>
        )}
      </div>
    )
  }
}

export default SubscribeForm
