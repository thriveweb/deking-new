import React, { Fragment } from 'react'

import './ResultAmount.css'

export default ({ option, sqm, extras }) => {
  let min = 0
  let max = 0
  let bats = 0
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
  if (option === 'patioRoof') {
    if (extras.attached === 'attached') {
      min = 200
      max = 250
      if (extras.insulated === 'insulated') {
        bats = 75 * sqm
        min = min + bats
        max = max + bats
      }
    }
    if (extras.attached === 'flyover') {
      min = 225
      max = 275
      if (extras.insulated === 'insulated') {
        bats = 75 * sqm
        min = min + bats
        max = max + bats
      }
    }
    min = sqm * 370 + min
    max = sqm * 400 + max
  }
  if (option === 'upperLevelDeckPatio') {
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
        bats = 75 * sqm
        min = min + bats
        max = max + bats
      }
    }
    if (extras.attached === 'flyover') {
      min = min + 225
      max = max + 275

      if (extras.insulated === 'insulated') {
        bats = 75 * sqm
        min = min + bats
        max = max + bats
      }
    }
    min = sqm * 370 + min
    max = sqm * 400 + max
  }
  if (option === 'lowerLevelDeckPatio') {
    if (extras.attached === 'attached') {
      min = 200
      max = 250
      if (extras.insulated === 'insulated') {
        bats = 75 * sqm
        min = min + bats
        max = max + bats
      }
    }
    if (extras.attached === 'flyover') {
      min = 225
      max = 275
      if (extras.insulated === 'insulated') {
        bats = 75 * sqm
        min = min + bats
        max = max + bats
      }
    }
    min = sqm * 300 + min
    max = sqm * 330 + max
  }

  const totalMin = min
    ? min.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    : ''
  const totalMax = max
    ? max.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    : ''

  return '$' + totalMin + ' - ' + '$' + totalMax
}
