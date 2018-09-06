import React, { Fragment } from 'react'

const QuoteStep = ({ className, thisStep, currentStep, children }) => (
  <Fragment>
    <div
      className={`container ${className} QuoteStep step${thisStep} ${
        currentStep === thisStep ? 'active' : ''
      }`}
    >
      <div className="QuoteStep--Shadow" />
      <div className="QuoteStep--Step">{children}</div>
    </div>
  </Fragment>
)

export default QuoteStep
