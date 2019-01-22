import React from 'react'
import { ChevronUp, ChevronDown } from 'react-feather'

import Content from './Content'
import Image from './Image'
import './Accordion.css'
import './ProcessAccordion.css'

export default class ProcessAccordion extends React.Component {
  static defaultProps = {
    items: [],
    className: ''
  }

  state = {
    activeItem: null
  }

  handleClick = index => {
    const activeItem = this.state.activeItem === index ? null : index
    this.setState({ activeItem })
  }

  render() {
    const { items, className } = this.props
    return (
      <div className={`ProcessAccordion Accordion ${className}`}>
        {items.map((item, index) => {
          const active = this.state.activeItem === index
          const prevSteps = this.state.activeItem >= index

          return (
            <div
              className={`Accordion--item ${active ? 'active' : ''} ${
                prevSteps ? 'prevActive' : ''
              }`}
              key={`accordion-item-${item.title + index}`}
            >
              <div
                className="flex titleGroup"
                onClick={() => this.handleClick(index)}
              >
                <div className="imageDisc">
                  <Image
                    background
                    src={`/images/icon${index}.png`}
                    alt={item.title}
                  />
                </div>
                <h2>
                  <span>{item.title}</span>{' '}
                </h2>
                {active ? <ChevronUp /> : <ChevronDown />}
              </div>

              {active && (
                <div className="description">
                  <Content source={item.content} />

                  {item.link && (
                    <a className="Button" href={item.link.publicURL}>
                      {item.buttonText}
                    </a>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}
