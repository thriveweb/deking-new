import React from 'react'

import Image from './Image'
import Button from './Button'
import './BreakoutBanner.css'

const BreakoutBanner = ({
  image,
  title,
  description,
  link,
  blackhalf,
  className = '',
  ...props
}) => (
  <div
    className={`section BannerSection relative ${(className,
    blackhalf ? 'blackhalf' : '')}`}
  >
    {image && <Image background src={image} alt={title} />}
    <div className="BannerSection--Graident" />
    <div className="BannerSection--Overlay" />
    <div className="container flex relative">
      <div className="one-half">
        {title && <h2 className="BannerSection--Title afterTitle">{title}</h2>}
        {description && (
          <div className="BannerSection--Description">{description}</div>
        )}
      </div>
      {link && (
        <div className="one-half">
          <Button className="" to={link.link}>
            {link.label}
          </Button>
        </div>
      )}
    </div>
  </div>
)

export default BreakoutBanner
