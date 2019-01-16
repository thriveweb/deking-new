import React from 'react'
import Link from 'gatsby-link'
import _map from 'lodash/map'

import Image from './Image'
import './PostCard.scss'

const PostCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  categories = [],
  className = '',
  ...props
}) => (
  <Link to={slug} className={`PostCard ${className}`}>
    <div className="flex">
      <div className="PostCard--Content">
        {title && <h3 className="PostCard--Title">{title}</h3>}
        <div className="PostCard--Category">
          {categories &&
            categories.lenght > 0 &&
            categories.map(cat => cat.category).join(', ')}
        </div>
        {excerpt && <div className="PostCard--Excerpt">{excerpt}</div>}
      </div>
      {featuredImage && (
        <div className="PostCard--Image relative">
          <Image background src={featuredImage} alt={title} />
        </div>
      )}
    </div>
  </Link>
)

export default PostCard
