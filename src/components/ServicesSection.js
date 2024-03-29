import React from 'react'
import _sortBy from 'lodash/sortBy'
import _filter from 'lodash/filter'

import ServiceCard from '../components/ServiceCard'
import './ServicesSection.css'

class ServicesSection extends React.Component {
  static defaultProps = {
    services: [],
    title: '',
    limit: 12,
    showLoadMore: false, // disable loadmore button
    loadMoreTitle: 'Load More',
    perPageLimit: 12
  }

  state = {
    // limit: this.props.limit //this line is commented to disable loadmore button
  }

  increaseLimit = () => {
    this.setState(prevState => ({
      limit: prevState.limit + this.props.perPageLimit
    }))
  }

  render() {
    const { services, title, showLoadMore, loadMoreTitle } = this.props
    const { limit } = this.state

    let visibleServices = _sortBy(services, ['date'])
      .reverse()
      .filter(page => page.fields.slug != '/services/decks/' && page.fields.slug != '/services/home-modifications/')
      // show all unlesss you set a limit.
      .slice(0, limit || services.length)

    return (
      <div className="ServicesSection">
        <div className="container">
          {title && <h2 className="ServicesSection--Title">{title}</h2>}
          {!!visibleServices.length && (
            <div className="ServicesSection--Grid">
              {visibleServices.map((service, index) => (
                <ServiceCard key={service.title + index} {...service} />
              ))}
            </div>
          )}
          {showLoadMore &&
            visibleServices.length < services.length && (
              <div className="taCenter">
                <button className="Button" onClick={this.increaseLimit}>
                  {loadMoreTitle}
                </button>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default ServicesSection
