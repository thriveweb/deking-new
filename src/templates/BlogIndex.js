import React from 'react'
// Export Template for use in CMS preview
export const BlogIndexTemplate = () => {

  return (
    <main className="Blog">
      <h1>Blog</h1>
    </main>
  )
}

// Export Default BlogIndex for front-end
const BlogIndex = ({ data }) => (
  <BlogIndexTemplate />
)

export default BlogIndex
