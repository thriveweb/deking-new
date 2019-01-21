import React from 'react'
import Helmet from 'react-helmet'
import _get from 'lodash/get'
import _pickBy from 'lodash/pickBy'

const onlyTruthyValues = obj => _pickBy(obj, item => item)

const Meta = props => {
  const {
    title,
    url,
    description,
    absoluteImageUrl = '',
    headerScripts,
    noindex,
    canonicalLink,
    siteTitle,
    siteDescription
    // overwrite { title, description } if in fields or fields.meta
  } = {
    ...props,
    ...onlyTruthyValues(_get(props, 'fields')),
    ...onlyTruthyValues(_get(props, 'fields.meta'))
  }

  // write headerScripts
  if (typeof window !== 'undefined') {
    const headerScriptsElement = document.head.querySelector('#headerScripts')
    if (headerScripts && headerScriptsElement) {
      headerScriptsElement.outerHTML = headerScripts
    }
  }

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:type" content="website" />}
      {url && <meta property="og:url" content={url} />}
      {noindex && <meta name="robots" content="noindex" />}
      {canonicalLink && <link rel="canonical" href={canonicalLink} />}
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta name="twitter:card" content={absoluteImageUrl} />
    </Helmet>
  )
}

export default Meta

export const query = graphql`
  fragment Meta on MarkdownRemark {
    frontmatter {
      meta {
        title
        description
        noindex
        canonicalLink
      }
    }
  }
`
