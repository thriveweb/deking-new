import React, { Component } from 'react'
import Helmet from 'react-helmet'

class Meta extends React.Component {
  // componentDidMount() {
  //   const { headerScripts } = this.props
  //   // write headerScripts
  //   if (typeof window !== 'undefined') {
  //     const intVal = setInterval(() => {
  //       let headerScriptsElement = false
  //       try {
  //         headerScriptsElement = document.getElementById('headerScripts')
  //       } catch (err) {
  //         return
  //       }
  //       if (headerScripts && headerScriptsElement) {
  //         headerScriptsElement.outerHTML = headerScripts
  //         clearInterval(intVal)
  //       }
  //     }, 100)
  //   }
  // }
  render() {
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
    } = this.props
    return (
      <Helmet>
        {title && <title>{title}</title>}
        {title && <meta property="og:title" content={title} />}
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
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
        <meta
          name="google-site-verification"
          content="qG89fWbh3KTY5XWB33kJJpbA_pqfuq8T4FHLTKpkIxw"
        />
        <meta name="msvalidate.01" content="B0112812CA622A13C327AF572E2BA5B5" />
      </Helmet>
    )
  }
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
