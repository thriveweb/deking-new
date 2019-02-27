import React from 'react'
import Link from 'gatsby-link'
import _sortBy from 'lodash/sortBy'

import ProjectCard from '../components/ProjectCard'
import './ProjectsSection.css'

class ProjectsSection extends React.Component {
  static defaultProps = {
    projects: [],
    title: '',
    limit: 50,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 50,
    isCategory: false
  }

  state = {
    limit: this.props.limit
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))
  }

  render() {
    const {
      projects,
      title,
      related,
      showLoadMore,
      loadMoreTitle,
      isCategory
    } = this.props
    const { limit } = this.state

    const visibleProjects = _sortBy(projects, ['date'])
      .reverse()
      // show all unlesss you set a limit.
      .slice(0, limit || projects.length)

    return (
      <div className="ProjectsSection">
        <div className="container">
          {visibleProjects &&
            visibleProjects.length > 0 && (
              <div className="ProjectsSection--Grid">
                {visibleProjects.map((project, index) => (
                  <ProjectCard key={project.title + index} {...project} />
                ))}
              </div>
            )}
        </div>
        {showLoadMore &&
          visibleProjects.length < projects.length && (
            <div className="taCenter">
              <button className="Button" onClick={this.increaseLimit}>
                {loadMoreTitle}
              </button>
            </div>
          )}
        {isCategory && (
          <div className="flex">
            <Link to="/projects/" className="Button">
              All Projects
            </Link>
          </div>
        )}
      </div>
    )
  }
}

export default ProjectsSection
