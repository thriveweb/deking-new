import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './CalculatorCard.css'

const CalculatorCard = ({ image, title, slug, className = '', ...props }) => (
  <Link
    to={slug}
    className={`CalculatorCard one-third ${className}`}
    {...props}
  >
    <h4>{title}</h4>
    <Image src={image} alt={title} />
    <div className="Button">Caculate Price</div>
    <div className="CalculatorCard--Content">
      <h4>{title}</h4>
      <div className="Button Button--inverted">Caculate Price</div>
    </div>
  </Link>
)

export default CalculatorCard
