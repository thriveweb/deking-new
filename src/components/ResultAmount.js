import React, { Fragment } from 'react'

import './ResultAmount.css'

export default ({ option, length, width, extras }) => {
  let min = 0
  let max = 0
  let bats = 0
  let sqm = width * length;
  if (option === 'groundLevelDeck') {
    min = sqm * 400
    max = sqm * 500
  }
  if (option === 'upperLevelDeck') {
    min = sqm * 500
    max = sqm * 600
    if (extras.stairs === 'stairs') {
      min = min + 4000
      max = max + 5000
    }
    if (extras.handrail === 'handrail') {
      min = min + ((width+length+length) * 330)
      max = max + ((width+length+length) * 370)
    }
  }
  if (option === 'poolDeck') {
    min = sqm * 400
    max = sqm * 600
  }
  if (option === 'patioRoof') {
    if (extras.insulated === 'insulated') {
      if (extras.attached === 'attached') {
        min = sqm * 360 + min
        max = sqm * 440 + max
      }
      if (extras.attached === 'flyover') {
        min = sqm * 380 + min
        max = sqm * 480 + max
      }
    }
    else { //non-insulated
      if (extras.attached === 'attached') {
        min = sqm * 260 + min
        max = sqm * 300 + max
      }
      if (extras.attached === 'flyover') {
        min = sqm * 280 + min
        max = sqm * 330 + max
      }
    }    
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
