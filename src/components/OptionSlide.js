import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './OptionSlide.css'

const OptionSlide = ({
  image,
  title,
  slideSet,
  positiveValue = 'Yes',
  negitiveValue = 'No',
  positiveTitle = 'Yes',
  negitiveTitle = 'No',
  className = '',
  handleChange,
  checked,
  ...props
}) => (
  <div className={`slide ${className}`} {...props}>
    <Image src={image} alt={title} />
    <p>{title}</p>
    <div className="OptionSlide--Button-wrap">
      <label
        className={`QuoteCalculator--Label ${
          checked === positiveValue ? 'selected' : ''
        } ${positiveTitle !== 'Yes' ? 'customTitle' : ''}
      `}
      >
        <input
          type="radio"
          checked={checked === positiveValue}
          onChange={handleChange}
          name={slideSet}
          value={positiveValue}
          className="raidio-yes"
        />
        {positiveTitle}
      </label>
      <label
        className={`QuoteCalculator--Label ${
          checked === negitiveValue ? 'selected' : ''
        } ${negitiveTitle !== 'No' ? 'customTitle' : ''}`}
      >
        <input
          type="radio"
          checked={checked === negitiveValue}
          onChange={handleChange}
          name={slideSet}
          value={negitiveValue}
          className="raidio-no"
        />
        {negitiveTitle}
      </label>
    </div>
  </div>
)

export default OptionSlide
