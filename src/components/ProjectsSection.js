import React from 'react'
import Link from 'gatsby-link'
import _sortBy from 'lodash/sortBy'

import ProjectCard from '../components/ProjectCard'
import './ProjectsSection.css'

class ProjectsSection extends React.Component {
  static defaultProps = {
    projects: [],
    title: '',
    limit: 12,
    showLoadMore: true,
    loadMoreTitle: 'Load More',
    perPageLimit: 12,
  }

  state = {
    limit: this.props.limit,
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit,
    }))
  }

  render() {
    const { projects, title, related, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    const visibleProjects = _sortBy(projects, ['date'])
      .reverse()
      // show all unlesss you set a limit.
      .slice(0, limit || projects.length)

    return (
      <div className="ProjectsSection">
        <div className="container">
          {related ? (
            <div className="flex relatedProjects">
              <h2 className="relatedProjects--Title">{title}</h2>
            </div>
          ) : (
            <h2 className="ProjectsSection--Title">{title}</h2>
          )}

          {!!visibleProjects.length && (
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
              <button className="button" onClick={this.increaseLimit}>
                {loadMoreTitle}
              </button>
            </div>
          )}
          <div className="flex">
            <Link to="/projects/" className="Button">
              All Projects
            </Link>
          </div>
      </div>
    )
  }
}

export default ProjectsSection
