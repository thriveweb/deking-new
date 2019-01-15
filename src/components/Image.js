import React from 'react'
import GatsbyImage from 'gatsby-image'
import PropTypes from 'prop-types'
import _get from 'lodash/get'
import './Image.css'

const extractChildImageSharp = (src = '', format) => {
  if (!format) {
    if (typeof src === 'string' && !format) return src
    const childImageSharp = _get(src, 'childImageSharp')
    if (!childImageSharp) return _get(src, 'publicURL')
  }
  if (format === 'sizes' || format === 'resolutions')
    return _get(src, `childImageSharp.${format}`)
  return src
}

class Image extends React.Component {
  render() {
    let {
      background,
      backgroundSize = 'cover',
      className = '',
      src,
      srcSet,
      source,
      onClick,
      sizes,
      alt,
      style,
      imgStyle,
      fade = true
    } = this.props

    const imageSizes = extractChildImageSharp(src, 'sizes')
    const resolutions = extractChildImageSharp(src, 'resolutions')
    const imageSrc = extractChildImageSharp(src || source)

    if (background) {
      let style = {}

      if (typeof imageSrc === 'string') {
        style = { backgroundImage: `url(${imageSrc})`, backgroundSize }
      }

      return (
        <div className={`BackgroundImage absolute ${className}`} style={style}>
          {!style.backgroundImage && (
            <Image
              src={imageSrc}
              alt={alt}
              style={{
                position: 'absolute',
                width: 'auto',
                height: 'auto'
              }}
              imgStyle={{
                objectFit: backgroundSize
              }}
            />
          )}
        </div>
      )
    }

    if (imageSizes || resolutions) {
      return (
        <GatsbyImage
          className={`Image ${className}`}
          sizes={imageSizes}
          resolutions={resolutions}
          onClick={onClick}
          alt={alt}
          style={style}
          imgStyle={imgStyle}
          fadeIn={fade}
        />
      )
    }

    return (
      <img
        className={`Image ${className}`}
        src={imageSrc}
        sizes={sizes || '100vw'}
        srcSet={srcSet}
        onClick={onClick}
        alt={alt}
      />
    )
  }
}

Image.propTypes = {
  alt: PropTypes.string.isRequired
}

export default Image

export const query = graphql`
  fragment FluidImage on File {
    publicURL
    childImageSharp {
      sizes(maxWidth: 2800, quality: 75) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
  fragment SmallImage on File {
    publicURL
    childImageSharp {
      sizes(maxWidth: 400, quality: 75) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
  fragment CroppedImage on File {
    publicURL
    childImageSharp {
      sizes(maxWidth: 2800, quality: 75) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`
