import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ServiceCard.css'

const ServiceCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  className = '',
  ...props
}) => (
  <Link to={slug} className={`ServiceCard ${className}`} {...props}>
    {featuredImage && (
      <div className="ServiceCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="ServiceCard--Content">
      {title && <h4 className="ServiceCard--Title">{title}</h4>}
      <div className="Button Button--inverted">Know more</div>
    </div>
  </Link>
)

export default ServiceCard
