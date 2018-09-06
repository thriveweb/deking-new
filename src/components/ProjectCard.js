import React from 'react'
import Link from 'gatsby-link'

import Image from './Image'
import './ProjectCard.css'

const ProjectCard = ({
  featuredImage,
  title,
  excerpt,
  slug,
  className = '',
  ...props
}) => (
  <Link to={slug} className={`ProjectCard ${className}`} {...props}>
    {featuredImage && (
      <div className="ProjectCard--Image relative">
        <Image background src={featuredImage} alt={title} />
      </div>
    )}
    <div className="ProjectCard--Content">
      {title && <h3 className="ProjectCard--Title">{title}</h3>}
      <div className="Button Button--inverted">View Project</div>
    </div>
  </Link>
)

export default ProjectCard
