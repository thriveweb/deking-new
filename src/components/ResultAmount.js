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
    min = sqm * 550
    max = sqm * 650
    if (extras.stairs === 'stairs') {
      min = min + 4000
      max = max + 5000
    }
    if (extras.handrail === 'handrail') {
      min = min + ((parseInt(width)+parseInt(width)+parseInt(length)) * 330)
      max = max + ((parseInt(width)+parseInt(width)+parseInt(length)) * 370)
    }
  }
  if (option === 'poolDeck') {
    min = sqm * 400
    max = sqm * 600
  }
  if (option === 'patioRoof') {
    if (extras.insulated === 'insulated') {
      if (extras.attached === 'attached') {
        min = sqm * 340 + min
        max = sqm * 440 + max
      }
      if (extras.attached === 'flyover') {
        min = sqm * 360 + min
        max = sqm * 460 + max
      }
    }
    else { //non-insulated
      if (extras.attached === 'attached') {
        min = sqm * 260 + min
        max = sqm * 340 + max
      }
      if (extras.attached === 'flyover') {
        min = sqm * 280 + min
        max = sqm * 350 + max
      }
    }    
  }
  if (option === 'upperLevelDeckPatio') {
    if (extras.stairs === 'stairs') {
      min = min + 4000
      max = max + 5000
    }
    if (extras.handrail === 'handrail') {
      min = min + 330
      max = max + 370
    }    
    if (extras.attached === 'attached') {
      min = sqm * 260 + min
      max = sqm * 340 + max
      if (extras.insulated === 'insulated') {
        min = min + (80 * sqm)
        max = max + (100 * sqm)
      }
    }
    if (extras.attached === 'flyover') {
      min = sqm * 280 + min
      max = sqm * 350 + max
      if (extras.insulated === 'insulated') {
        min = min + (80 * sqm)
        max = max + (110 * sqm)
      }
    }    
    min = sqm * 550 + min
    max = sqm * 650 + max
  }
  if (option === 'lowerLevelDeckPatio') {
    if (extras.attached === 'attached') {
      min = sqm * 260 + min
      max = sqm * 300 + max
      if (extras.insulated === 'insulated') {
        min = min + (100 * sqm)
        max = max + (140 * sqm)
      }
    }
    if (extras.attached === 'flyover') {
      min = sqm * 280 + min
      max = sqm * 330 + max
      if (extras.insulated === 'insulated') {
        min = min + (100 * sqm)
        max = max + (150 * sqm)
      }
    } 
    min = sqm * 400 + min
    max = sqm * 500 + max
  }

  const totalMin = min
    ? min.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    : ''
  const totalMax = max
    ? max.toFixed().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    : ''

  return '$' + totalMin + ' - ' + '$' + totalMax
}
