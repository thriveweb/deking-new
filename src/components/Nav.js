import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Phone, Menu, ChevronDown, X } from 'react-feather'
import _get from 'lodash/get'
import _kebabCase from 'lodash/kebabCase'
import _sortBy from 'lodash/sortBy'
import _reject from 'lodash/reject'

import Logo from './Logo'
import Button from './Button'
import NavLink from './NavLink'
import './Nav.css'

export default class Nav extends Component {
  state = {
    active: false,
    activeSubnav: false,
    mobile: false
  }

  toggleActive = () => {
    if (this.state.mobile) {
      this.setState({ active: !this.state.active })
    }
  }

  // Only close nav if it is open
  handleLinkClick = () => {
    this.state.active && this.handleMenuToggle()
  }

  toggleSubnav = key => {
    this.setState({
      activeSubnav: this.state.activeSubnav === key ? false : key
    })
  }

  isMobile = () => {
    if (window.innerWidth <= 1100) {
      this.setState({ mobile: true })
    } else {
      this.setState({ mobile: false })
    }
  }

  componentDidMount() {
    this.isMobile()
    window.addEventListener('resize', this.isMobile.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.isMobile.bind(this))
  }

  render() {
    const { allPages, globalSettings } = this.props
    const { active } = this.state
    const getChildPages = parentSlug =>
      allPages.filter(
        page =>
          // _get(page, 'fields.slug', '') !== parentSlug &&
          _get(page, 'fields.slug', '').indexOf(parentSlug) === 0
      )

    const renderChildPageLinks = parentSlug => {
      let childPages = _sortBy(getChildPages(parentSlug), 'frontmatter.date')
      childPages = _reject(childPages, ['fields.slug', '/services/'])

      if (parentSlug === '/about/') {
        const customOrder = [
          '/about/process/',
          '/about/',
          '/about/team/',
          '/about/join/',
          '/about/guarantees/',
          '/about/finance/'
        ]
        let orderedChildPages = customOrder.map(slug => {
          for (let page in childPages) {
            if (childPages[page].fields.slug === slug) return childPages[page]
          }
        })
        if (orderedChildPages) childPages = orderedChildPages
      }

      if (!childPages.length) return null
      return (
        <div className={`SubNav SubNav-${_kebabCase(parentSlug)}`}>
          {childPages.map(page => (
            <NavLink
              onClick={this.toggleActive}
              key={page.fields.slug}
              to={page.fields.slug}
              exact
            >
              {page.frontmatter.title}
            </NavLink>
          ))}
        </div>
      )
    }

    const NavLinkGroup = ({ to, title, ...props }) => (
      <div
        className={`NavLinkGroup ${
          this.state.activeSubnav === to ? 'active' : ''
        }`}
      >
        <NavLink to={to} {...props} onClick={this.toggleActive}>
          {title}
        </NavLink>
        <ChevronDown
          onClick={() => {
            this.toggleSubnav(to)
          }}
        />
        {renderChildPageLinks(to)}
      </div>
    )

    return (
      <nav className="Nav">
        <div className="Nav--Container container">
          <Link to="/">
            <Logo />
          </Link>
          <button
            className="Nav--MenuButton Button-blank"
            onClick={this.toggleActive}
          >
            {active ? <X /> : <Menu />}
          </button>
          <div className={`Nav--Container--Links ${active ? 'active' : ''}`}>
            <NavLinkGroup
              to="/about/"
              title="About"
              onClick={this.toggleActive}
            />
            <NavLinkGroup
              to="/services/"
              title="Services"
              onClick={this.toggleActive}
            />
            <NavLink to="/projects/" onClick={this.toggleActive}>
              Projects
            </NavLink>
            <NavLink to="/blog/" onClick={this.toggleActive}>
              Blog
            </NavLink>
            <NavLink to="/contact/" onClick={this.toggleActive}>
              Contact
            </NavLink>
            <div className="Nav--Container--Sep" />
            <NavLink
              href={`tel:${globalSettings.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="NavLink--Phone"
            >
              {globalSettings.phone}
            </NavLink>
            <Button className="NavLink--Button" href="quote-calculator">
              <svg
                className="calculator"
                width="13"
                height="17"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.142 0H1.857A1.862 1.862 0 0 0 0 1.857v13.001c0 1.021.835 1.857 1.857 1.857h9.286A1.862 1.862 0 0 0 13 14.858V1.857A1.862 1.862 0 0 0 11.142 0zM4.336 14.063a.463.463 0 0 1-.463.463H2.606a.462.462 0 0 1-.463-.463v-.858c0-.257.207-.462.463-.462h1.267a.46.46 0 0 1 .463.462v.858zm0-2.857a.464.464 0 0 1-.463.463H2.606a.464.464 0 0 1-.463-.463v-.858c0-.256.207-.462.463-.462h1.267c.257 0 .463.206.463.462v.858zm0-2.856a.461.461 0 0 1-.463.462H2.606a.462.462 0 0 1-.463-.462v-.86c0-.256.207-.462.463-.462h1.267c.257 0 .463.207.463.462v.86zm3.26 5.713a.461.461 0 0 1-.462.462H5.866a.461.461 0 0 1-.462-.462v-.858c0-.257.207-.462.462-.462h1.268a.46.46 0 0 1 .462.462v.858zm0-2.857a.464.464 0 0 1-.462.463H5.866a.464.464 0 0 1-.462-.463v-.858c0-.256.207-.462.462-.462h1.268c.256 0 .462.206.462.462v.858zm0-2.856a.462.462 0 0 1-.462.462H5.866a.462.462 0 0 1-.462-.462v-.86c0-.256.207-.462.462-.462h1.268c.256 0 .462.207.462.462v.86zm3.186 5.688a.43.43 0 0 1-.43.431H9.17a.432.432 0 0 1-.432-.43v-3.667a.43.43 0 0 1 .432-.43h1.18a.43.43 0 0 1 .431.43v3.666zm.076-5.688a.461.461 0 0 1-.462.462H9.127a.462.462 0 0 1-.462-.462v-.86c0-.256.208-.462.462-.462h1.269c.256 0 .462.207.462.462v.86zm.284-3.986c0 .409-.334.743-.743.743H2.6a.744.744 0 0 1-.743-.743V3.065c0-.409.335-.743.743-.743h7.8c.408 0 .743.334.743.743v1.299z"
                  fill="#FFF"
                  fillRule="evenodd"
                />
              </svg>
              Quote Calculator
            </Button>
          </div>
        </div>
      </nav>
    )
  }
}
