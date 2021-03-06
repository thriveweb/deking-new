import React, { Fragment } from 'react'

import './ResultAmount.css'

export default ({ option, sqm, extras }) => {
  let min = 0
  let max = 0
  let bats = 0
  if (option === 'groundLevelDeck') {
    min = sqm * 320
    max = sqm * 350
  }
  if (option === 'upperLevelDeck') {
    min = sqm * 410
    max = sqm * 450
    if (extras.stairs === 'stairs') {
      min = min + 3700
      max = max + 4700
    }
    if (extras.handrail === 'handrail') {
      min = min + 250
      max = max + 300
    }
  }
  if (option === 'poolDeck') {
    min = sqm * 340
    max = sqm * 380
  }
  if (option === 'patioRoof') {
    if (extras.insulated === 'insulated') {
      bats = 50 * sqm
      min = min + bats
      max = max + bats
    }
    if (extras.attached === 'attached') {
      min = sqm * 180 + min
      max = sqm * 230 + max
    }
    if (extras.attached === 'flyover') {
      min = sqm * 225 + min
      max = sqm * 275 + max
    }
    min = min
    max = max
  }
  if (option === 'upperLevelDeckPatio') {
    if (extras.stairs === 'stairs') {
      min = min + 3700
      max = max + 4700
    }
    if (extras.handrail === 'handrail') {
      min = min + 250
      max = max + 300
    }
    if (extras.insulated === 'insulated') {
      bats = 75 * sqm
      min = min + bats
      max = max + bats
    }
    if (extras.attached === 'attached') {
      min = sqm * 180 + min
      max = sqm * 230 + max
    }
    if (extras.attached === 'flyover') {
      min = sqm * 225 + min
      max = sqm * 275 + max
    }
    min = sqm * 370 + min
    max = sqm * 400 + max
  }
  if (option === 'lowerLevelDeckPatio') {
    if (extras.insulated === 'insulated') {
      bats = 75 * sqm
      min = min + bats
      max = max + bats
    }
    if (extras.attached === 'attached') {
      min = sqm * 180 + min
      max = sqm * 230 + max
    }
    if (extras.attached === 'flyover') {
      min = sqm * 225 + min
      max = sqm * 275 + max
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
