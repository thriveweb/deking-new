import React from 'react'
import PropTypes from 'prop-types'

// import Content from './Content'
import Image from './Image'
import './PageHeader.css'

const PageHeader = ({
  title,
  subtitle,
  backgroundImage,
  large,
  split,
  className = ''
}) => {
  if (large) className += ' PageHeader-large'
  if (split) className += ' PageHeader-split'
  if (split) split = ' PageHeader-split-half'
  return (
    <div className={`PageHeader relative ${className}`}>
      {backgroundImage && (
        <Image background src={backgroundImage} alt={title} />
      )}
      <div className="container relative">
        <div className={split}>
          <h1 className="PageHeader--Title">{title}</h1>
          {subtitle && <div className="PageHeader--Subtitle">{subtitle}</div>}
        </div>
      </div>
    </div>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader
