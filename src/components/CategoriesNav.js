import React from 'react'
import Link from 'gatsby-link'

import './CategoriesNav.css'

const CategoriesNav = ({ categories, base }) => (
  <div className="CategoriesNav">
    <Link className="NavLink" exact to={`/${base}/`}>
      All
    </Link>
    {categories.map((category, index) => (
      <Link
        exact
        className="NavLink"
        key={category.title + index}
        to={category.slug}
      >
        {category.title}
      </Link>
    ))}
  </div>
)

export default CategoriesNav
