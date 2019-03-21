import React, { Fragment } from 'react'
import { stringify } from 'qs'
import _startCase from 'lodash/startCase'
import qs from 'qs'

import Image from '../components/Image'
import OptionGallery from '../components/OptionGallery'
import QuoteStep from './QuoteStep'
import OptionSlide from './OptionSlide'
import ResultAmount from './ResultAmount'
import Button from './Button'

import './QuoteCalculator.css'

function encode(data) {
  const formData = new FormData()
  for (const key of Object.keys(data)) {
    formData.append(key, data[key])
  }
  return formData
}

class QuoteCalculator extends React.Component {
  static defaultProps = {
    errorMessage:
      'There is a problem, your quote has not been sent, please try contacting us via email'
  }

  state = {
    name: '',
    email: '',
    suburb: '',
    postCode: '',
    phone: '',
    option: null,
    stairs: null,
    handrail: null,
    insulated: null,
    attached: null,
    roof: null,
    length: '',
    width: '',
    confirmEmail: '',
    subscribe: false,
    quotePrice: '',
    contact: false,
    disabled: false,
    currentStep: 0,
    skipOptions: false
  }

  componentDidMount() {
    const obj = qs.parse(window.location.search, { ignoreQueryPrefix: true })
    if (obj.option) {
      this.setState({ option: obj.option })
    }
    if (obj.currentStep) {
      this.setState({ currentStep: parseInt(obj.currentStep, 10) })
    }
  }

  handelNavigate = e => {
    let next = true

    if (e) {
      e.preventDefault()
      next = e.target.value === 'Next'
    }

    if (this.state.currentStep === 3) {
      const form = document.querySelector('form')
      const valid = form.checkValidity()

      if (!valid) {
        form.reportValidity()
        return false
      }
    }

    const obj = {}
    let step = 0
    if (next) {
      step = 1
    } else {
      step = -1
      obj.option = null
      obj.stairs = null
      obj.roof = null
      obj.stairs = null
      obj.handrail = null
      obj.insulated = null
      obj.attached = null
      obj.currentStep = 0
      obj.length = ''
      obj.width = ''
    }

    const skipStep = this.state.skipOptions ? 1 : 0
    let nextStep = this.state.currentStep + step + skipStep
    if (nextStep < 0) {
      nextStep = 0
    }
    this.setState({
      currentStep: nextStep,
      ...obj
    })
  }

  handleChange = e => {
    const skippy = e.target.dataset.skipoptions
    const type = e.target.type
    const name = e.target.name
    const value = type === 'checkbox' ? e.target.checked : e.target.value

    this.setState(
      {
        [name]: value,
        skipOptions: skippy,
        quotePrice: ResultAmount({
          option: this.state.option,
          sqm: this.state.width * this.state.length,
          extras: {
            stairs: this.state.stairs,
            handrail: this.state.handrail,
            insulated: this.state.insulated,
            attached: this.state.attached
          }
        })
      },
      () => {
        if (name === 'option') this.handelNavigate()
      }
    )
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState()
    const form = e.target
    fetch('/', {
      method: 'POST',
      body: encode({
        subject: 'quote',
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => {
        this.setState({
          currentStep: 5,
          disabled: false
        })
      })
      .catch(error => alert(error))
  }

  render() {
    const {
      currentStep,
      option,
      skipOptions,
      stairs,
      handrail,
      insulated,
      attached,
      roof,
      length,
      width,
      name,
      email,
      confirmEmail,
      suburb,
      postCode,
      phone,
      subscribe,
      quotePrice,
      contact
    } = this.state
    const globalSettings = this.props.globalSettings

    return (
      <div className="QuoteCalculator">
        <form
          className="QuoteCalculator--Form"
          name="QuoteCalculator--Form"
          action=""
          onSubmit={this.handleSubmit}
          data-netlify-honeypot="confirmEmail"
          data-netlify="true"
        >
          <QuoteStep currentStep={currentStep} thisStep={0}>
            <h3>Select Option</h3>
            <p>
              By using our quote calculator Deking Decks reserve the right to
              contact you and send you appropriate marketing materials. Privacy
              is important to us, you can opt our anytime and no spam will be
              sent.
            </p>
            <div className="flex QuoteCalculator--Option">
              <label
                className={`QuoteCalculator--Label QuoteCalculator--Option-image ${
                  option === 'groundLevelDeck' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  checked={option === 'groundLevelDeck'}
                  onChange={this.handleChange}
                  name="option"
                  value="groundLevelDeck"
                  className={`groundLevelDeck ${
                    option === 'groundLevelDeck' ? 'checked' : ''
                  }`}
                  required
                  data-skipoptions={true}
                />
                Ground Level Deck
              </label>
              <label
                className={`QuoteCalculator--Label QuoteCalculator--Option-image ${
                  option === 'upperLevelDeck' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  checked={option === 'upperLevelDeck'}
                  onChange={this.handleChange}
                  name="option"
                  className={`upperLevelDeck ${
                    option === 'upperLevelDeck' ? 'checked' : ''
                  }`}
                  value="upperLevelDeck"
                  required
                />
                Upper Level Deck
              </label>
              <label
                className={`QuoteCalculator--Label QuoteCalculator--Option-image ${
                  option === 'poolDeck' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  checked={option === 'poolDeck'}
                  onChange={this.handleChange}
                  name="option"
                  className={`poolDeck ${
                    option === 'poolDeck' ? 'checked' : ''
                  }`}
                  value="poolDeck"
                  required
                  data-skipoptions={true}
                />
                Pool Deck
              </label>
              <label
                className={`QuoteCalculator--Label QuoteCalculator--Option-image ${
                  option === 'patioRoof' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  checked={option === 'patioRoof'}
                  onChange={this.handleChange}
                  name="option"
                  className={`patioRoof ${
                    option === 'patioRoof' ? 'checked' : ''
                  }`}
                  value="patioRoof"
                  required
                />
                Patio roof flyover or attached
              </label>
              <label
                className={`QuoteCalculator--Label QuoteCalculator--Option-image ${
                  option === 'upperLevelDeckPatio' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  checked={option === 'upperLevelDeckPatio'}
                  onChange={this.handleChange}
                  name="option"
                  className={`upperLevelDeckPatio ${
                    option === 'upperLevelDeckPatio' ? 'checked' : ''
                  }`}
                  value="upperLevelDeckPatio"
                  required
                />
                Upper Level Deck & Patio
              </label>
              <label
                className={`QuoteCalculator--Label QuoteCalculator--Option-image ${
                  option === 'lowerLevelDeckPatio' ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  checked={option === 'lowerLevelDeckPatio'}
                  onChange={this.handleChange}
                  name="option"
                  className={`lowerLevelDeckPatio ${
                    option === 'lowerLevelDeckPatio' ? 'checked' : ''
                  }`}
                  value="lowerLevelDeckPatio"
                  required
                />
                Lower Level Deck & Patio
              </label>
            </div>
            <div className={currentStep === 0 ? 'hide' : 'center-buttons'}>
              <input
                type="button"
                value="Next"
                onClick={this.handelNavigate}
                disabled={option === null}
              />
            </div>
          </QuoteStep>

          <QuoteStep currentStep={currentStep} thisStep={1}>
            <h3>Select Optional Extras</h3>
            {
              {
                upperLevelDeck: (
                  <Fragment>
                    <OptionGallery selectedOptions={[stairs, handrail]}>
                      <OptionSlide
                        image="/images/icon-stairs.svg"
                        title="Do you want Stairs"
                        slideSet="stairs"
                        positiveValue="stairs"
                        positiveTitle="Stairs"
                        negitiveValue="noStaris"
                        negitiveTitle="No Staris"
                        checked={stairs}
                        handleChange={e => this.handleChange(e)}
                      />
                      <OptionSlide
                        key="2"
                        image="/images/icon-handrail.svg"
                        title="Do you want a handrail"
                        slideSet="handrail"
                        positiveValue="handrail"
                        positiveTitle="Handrail"
                        negitiveValue="noHandrail"
                        negitiveTitle="No Handrail"
                        checked={handrail}
                        handleChange={e => this.handleChange(e)}
                      />
                    </OptionGallery>
                    <div className="center-buttons">
                      <input
                        type="button"
                        className="back-btn"
                        value="Back"
                        onClick={this.handelNavigate}
                      />
                      <input
                        type="button"
                        value="Next"
                        onClick={this.handelNavigate}
                        disabled={stairs === null || handrail === null}
                      />
                    </div>
                  </Fragment>
                ),
                upperLevelDeckPatio: (
                  <Fragment>
                    <OptionGallery
                      selectedOptions={[stairs, handrail, insulated, attached]}
                    >
                      <OptionSlide
                        image="/images/icon-stairs.svg"
                        title="Do you want Stairs"
                        slideSet="stairs"
                        positiveValue="stairs"
                        positiveTitle="Stairs"
                        negitiveValue="noStaris"
                        negitiveTitle="No Staris"
                        checked={stairs}
                        handleChange={e => this.handleChange(e)}
                      />
                      <OptionSlide
                        key="2"
                        image="/images/icon-stairs.svg"
                        title="Do you want a handrail"
                        slideSet="handrail"
                        positiveValue="handrail"
                        positiveTitle="Handrail"
                        negitiveValue="noHandrail"
                        negitiveTitle="No Handrail"
                        checked={handrail}
                        handleChange={e => this.handleChange(e)}
                      />
                      <OptionSlide
                        image="/images/icon-insulated.svg"
                        title="So you want insulation"
                        slideSet="insulated"
                        positiveValue="insulated"
                        positiveTitle="Insulated"
                        negitiveValue="nonInsulated"
                        negitiveTitle="Non-Insulated"
                        checked={insulated}
                        handleChange={e => this.handleChange(e)}
                      />
                      <OptionSlide
                        image="/images/icon-flyover.svg"
                        title="Do you want a Attached or Flyover"
                        slideSet="attached"
                        positiveValue="attached"
                        positiveTitle="Attached Roof"
                        negitiveValue="flyover"
                        negitiveTitle="Flyover Roof"
                        checked={attached}
                        handleChange={e => this.handleChange(e)}
                      />
                    </OptionGallery>
                    <div className="center-buttons">
                      <input
                        type="button"
                        className="back-btn"
                        value="Back"
                        onClick={this.handelNavigate}
                      />
                      <input
                        type="button"
                        value="Next"
                        onClick={this.handelNavigate}
                        disabled={
                          stairs === null ||
                          handrail === null ||
                          insulated === null ||
                          attached === null
                        }
                      />
                    </div>
                  </Fragment>
                ),
                patioRoof: (
                  <Fragment>
                    <OptionGallery selectedOptions={[insulated, attached]}>
                      <OptionSlide
                        image="/images/icon-insulated.svg"
                        title="So you want insulation"
                        slideSet="insulated"
                        positiveValue="insulated"
                        positiveTitle="Insulated"
                        negitiveValue="nonInsulated"
                        negitiveTitle="Non-Insulated"
                        checked={insulated}
                        handleChange={e => this.handleChange(e)}
                      />
                      <OptionSlide
                        image="/images/icon-flyover.svg"
                        title="Do you want a Attached or Flyover"
                        slideSet="attached"
                        positiveValue="attached"
                        positiveTitle="Attached Roof"
                        negitiveValue="flyover"
                        negitiveTitle="Flyover Roof"
                        checked={attached}
                        handleChange={e => this.handleChange(e)}
                      />
                    </OptionGallery>
                    <div className="center-buttons">
                      <input
                        type="button"
                        className="back-btn"
                        value="Back"
                        onClick={this.handelNavigate}
                      />
                      <input
                        type="button"
                        value="Next"
                        onClick={this.handelNavigate}
                        disabled={insulated === null || attached === null}
                      />
                    </div>
                  </Fragment>
                ),
                lowerLevelDeckPatio: (
                  <Fragment>
                    <OptionGallery selectedOptions={[insulated, attached]}>
                      <OptionSlide
                        image="/images/icon-insulated.svg"
                        title="So you want insulation"
                        slideSet="insulated"
                        positiveValue="insulated"
                        positiveTitle="Insulated"
                        negitiveValue="nonInsulated"
                        negitiveTitle="Non-Insulated"
                        checked={insulated}
                        handleChange={e => this.handleChange(e)}
                      />
                      <OptionSlide
                        image="/images/icon-flyover.svg"
                        title="Do you want a Attached or Flyover"
                        slideSet="attached"
                        positiveValue="attached"
                        positiveTitle="Attached Roof"
                        negitiveValue="flyover"
                        negitiveTitle="Flyover Roof"
                        checked={attached}
                        handleChange={e => this.handleChange(e)}
                      />
                    </OptionGallery>
                    <div className="center-buttons">
                      <input
                        type="button"
                        className="back-btn"
                        value="Back"
                        onClick={this.handelNavigate}
                      />
                      <input
                        type="button"
                        value="Next"
                        onClick={this.handelNavigate}
                        disabled={insulated === null || attached === null}
                      />
                    </div>
                  </Fragment>
                ),
                default: ''
              }[option]
            }
          </QuoteStep>

          <QuoteStep currentStep={currentStep} thisStep={2}>
            <h3>Enter Measurments</h3>
            <div className="taCenter heading-image">
              <Image src="/images/measurments.svg" alt="Measurments" />
            </div>
            <div className="flex-labels">
              <label className="QuoteCalculator--Label one-half">
                <p>Length (M)</p>
                <input
                  className="QuoteCalculator--Input"
                  type="number"
                  step="0.01"
                  value={length}
                  onChange={this.handleChange}
                  name="length"
                  required
                />
              </label>
              <label className="QuoteCalculator--Label one-half">
                <p>Width (M)</p>
                <input
                  className="QuoteCalculator--Input"
                  type="number"
                  step="0.01"
                  value={width}
                  onChange={this.handleChange}
                  name="width"
                  required
                />
              </label>
            </div>
            <div className="center-buttons">
              <input
                type="button"
                className="back-btn"
                value="Back"
                onClick={this.handelNavigate}
              />
              <input
                type="button"
                value="Next"
                onClick={this.handelNavigate}
                disabled={width === '' || length === ''}
              />
            </div>
          </QuoteStep>

          <QuoteStep currentStep={currentStep} thisStep={3}>
            <h3>Fill in your personal details</h3>
            <div className="taCenter heading-image">
              <Image
                className="personal-details"
                src="/images/personalDetails.svg"
                alt="Personal details"
              />
            </div>
            <div className="flex-labels">
              <label className="QuoteCalculator--Label">
                <input
                  className="QuoteCalculator--Input"
                  type="text"
                  placeholder="Name"
                  onChange={this.handleChange}
                  name="name"
                  value={name}
                  required
                />
              </label>
              <label className="QuoteCalculator--Label">
                <input
                  className="QuoteCalculator--Input"
                  type="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                  value={email}
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  required
                />
                <input
                  type="text"
                  name="confirmEmail"
                  style={{ display: 'none' }}
                  onChange={this.handleChange}
                  value={confirmEmail}
                />
              </label>
            </div>
            <div className="flex-labels">
              <label className="QuoteCalculator--Label">
                <input
                  className="QuoteCalculator--Input"
                  type="text"
                  placeholder="Suburb"
                  onChange={this.handleChange}
                  name="suburb"
                  value={suburb}
                  required
                />
              </label>
              <label className="QuoteCalculator--Label">
                <input
                  className="QuoteCalculator--Input"
                  type="text"
                  placeholder="Post Code"
                  onChange={this.handleChange}
                  name="postCode"
                  value={postCode}
                  required
                />
              </label>
            </div>
            <div className="fullwidth-labels">
              <label className="QuoteCalculator--Label">
                <input
                  className="QuoteCalculator--Input"
                  type="text"
                  placeholder="Phone"
                  onChange={this.handleChange}
                  name="phone"
                  value={phone}
                  required
                />
              </label>
              <label className="QuoteCalculator--Label suscribe-box">
                <input
                  type="checkbox"
                  checked={subscribe}
                  checked
                  onChange={this.handleChange}
                  name="subscribe"
                />
                Please email me the calculation and add me to the mailing list.
              </label>
            </div>

            <input
              type="hidden"
              name="quotePrice"
              value={ResultAmount({
                option: option,
                sqm: width * length,
                extras: {
                  stairs: stairs,
                  handrail: handrail,
                  insulated: insulated,
                  attached: attached
                }
              })}
            />
            <div className="center-buttons">
              <input
                type="button"
                className="back-btn"
                value="Back"
                onClick={this.handelNavigate}
              />
              <input
                type="button"
                value="Next"
                onClick={this.handelNavigate}
                disabled={
                  name === '' ||
                  email === '' ||
                  suburb === '' ||
                  postCode === ''
                }
              />
            </div>
          </QuoteStep>

          <QuoteStep
            className="blackscreen"
            currentStep={currentStep}
            thisStep={4}
          >
            <div>
              <h3>We are generating your estimate</h3>
              <p>
                Please confirm you understand that the prices that you will be
                given are only indicative and estimates only.
              </p>
              <input
                className="Button QuoteCalculator--SubmitButton"
                type="submit"
                value="yes"
              />
              <p>
                For a more accurate price, we can have one of our sales
                professionals to discuss the price in more detail.
              </p>
            </div>
            <div className="full-load">
              <Image src="/images/full.gif" alt="loading" />
            </div>
          </QuoteStep>
          <div className="hidden">
            <input type="raidio" name="stairs" />
            <input type="raidio" name="handrail" />
            <input type="raidio" name="insulated" />
            <input type="raidio" name="attached" />
            <input type="hidden" name="subject" value="Quote Submission" />
          </div>
        </form>

        <QuoteStep currentStep={currentStep} thisStep={5}>
          <h3>Results</h3>
          <div className="taCenter heading-image">
            <Image src="/images/personalDetails.svg" alt="Personal details" />
          </div>
          <div className="ResultFlex">
            <div className="one-half">
              {option && <h2 className="afterTitle">{_startCase(option)}</h2>}
              <div className="relative ResultOption-image">
                <div className={`BackgroundImage ${option}`} />
              </div>
            </div>
            <div className="details one-half">
              {option && (
                <p>
                  <strong>Deck type: </strong>
                  {_startCase(option)}
                  {insulated &&
                    attached && (
                      <span>
                        <br />
                        {'Roof: '}
                        {_startCase(attached)}
                        {' & '}
                        {_startCase(insulated)}
                      </span>
                    )}
                </p>
              )}

              <div>
                {stairs === null ||
                  handrail === null ||
                  insulated === null ||
                  attached === null || (
                    <Fragment>
                      <strong>Options: </strong>
                      <ul>
                        {stairs && <li>{_startCase(stairs)} </li>}
                        {handrail && <li>{_startCase(handrail)} </li>}
                        {insulated && <li>Roof - {_startCase(insulated)} </li>}
                        {attached && <li>Roof - {_startCase(attached)} </li>}
                      </ul>
                    </Fragment>
                  )}

                {width && (
                  <Fragment>
                    <strong>Width: </strong>
                    {width}m<br />
                  </Fragment>
                )}
                {length && (
                  <Fragment>
                    <strong>Length: </strong>
                    {length}m<br />
                  </Fragment>
                )}
                {length &&
                  width && (
                    <Fragment>
                      <strong>Total area: </strong>
                      {length && width * length}
                      sqm
                      <br />
                    </Fragment>
                  )}
              </div>
            </div>
          </div>
          <div className="Result--Calculations">
            <div className="Result--Calculations-Row price">
              <div className="title">Estimated Price:</div>
              <div className={`ResultAmount`}>
                <ResultAmount
                  option={option}
                  sqm={width * length}
                  extras={{
                    stairs,
                    handrail,
                    insulated,
                    attached
                  }}
                />
              </div>
            </div>
            <div className="Result--Calculations-Row council">
              <div className="title">Plans, Council Permit QBCC:</div>
              <div className="amount">$1,500</div>
            </div>
          </div>
          <div className="Result--Content taCenter">
            <h4 className="red">Thank you for using our calculator!</h4>
            <p>
              This estimate should only be used as a guide. We will get in touch
              with you to provide you with a more accurate quote if you require
              one.
            </p>
            <a
              href={`tel:${globalSettings.phone2}`}
              className="Button  hasShadowHover"
            >
              Call us
            </a>
          </div>
        </QuoteStep>

        <div
          className={`nextScreenOverlay ${currentStep === 1 ? 'active' : ''}`}
        >
          <Image src="/images/loading1.gif" alt="loading" />
        </div>
        <div
          className={`nextScreenOverlay ${currentStep === 2 ? 'active' : ''}`}
        >
          <Image src="/images/loading2.gif" alt="loading" />
        </div>
        <div
          className={`nextScreenOverlay ${currentStep === 3 ? 'active' : ''}`}
        >
          <Image src="/images/loading3.gif" alt="loading" />
        </div>
      </div>
    )
  }
}

export default QuoteCalculator
