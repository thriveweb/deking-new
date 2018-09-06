import React, { Fragment } from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ResultAmount.css'

export default class ResultAmount extends React.Component {
  render() {
    const { option, sqm, extras, className = '' } = this.props
    let min
    let max
    if (option === 'groundLevelDeck') {
      min = sqm * 300
      max = sqm * 330
    }
    if (option === 'upperLevelDeck') {
      min = sqm * 370
      max = sqm * 400
      if (extras.stairs === 'stairs') {
        min = min + 3700
        max = max + 4700
      }
      if (extras.handrail === 'handrail') {
        min = min + 300
        max = max + 350
      }
    }
    if (option === 'poolDeck') {
      min = sqm * 330
      max = sqm * 370
    }
    if (option === 'roofFlyoverAttached') {
      if (extras.attached === 'attached') {
        min = 200
        max = 250
        if (extras.insulated === 'insulated') {
          min = min + 75
          max = max + 75
        }
      }
      if (extras.attached === 'flyover') {
        min = 225
        max = 275
        if (extras.insulated === 'insulated') {
          min = min + 75
          max = max + 75
        }
      }
    }
    if (option === 'upperLevelDeckPatio') {
      min = sqm * 370
      max = sqm * 400
      if (extras.stairs === 'stairs') {
        min = min + 3700
        max = max + 4700
      }
      if (extras.handrail === 'handrail') {
        min = min + 300
        max = max + 350
      }
      if (extras.attached === 'attached') {
        min = min + 200
        max = max + 250
        if (extras.insulated === 'insulated') {
          min = min + 75
          max = max + 75
        }
      }
      if (extras.attached === 'flyover') {
        min = min + 225
        max = max + 275
        if (extras.insulated === 'insulated') {
          min = min + 75
          max = max + 75
        }
      }
    }
    if (option === 'lowerLevelDeckPatio') {
      min = sqm * 300
      max = sqm * 330
      if (extras.attached === 'attached') {
        min = 200
        max = 250
        if (extras.insulated === 'insulated') {
          min = min + 75
          max = max + 75
        }
      }
      if (extras.attached === 'flyover') {
        min = 225
        max = 275
        if (extras.insulated === 'insulated') {
          min = min + 75
          max = max + 75
        }
      }
    }

    return (
      <div className={`ResultAmount ${className}`}>
        {min &&
          max && (
            <Fragment>
              ${min.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
              {' - '}
              ${max.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')}
            </Fragment>
          )}
      </div>
    )
  }
}
