import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import _range from 'lodash/range'

import './Squares.css'

class Squares extends React.Component {
  makeRandom = () => 0 + Math.round(Math.random() * Math.floor(100))
  render() {
    const top = Array.from(_range(0, 1000, 5))
    const newArray = Array(15)
      .fill(0)
      .map((e, i) => i + 1)
    return (
      <Fragment>
        {newArray.map((square, index) => {
          let left = this.makeRandom() - 10
          let positionTop = top[index]
          return (
            <div
              key={index}
              className="Square"
              style={{
                top: `${positionTop}%`,
                left: `${left}%`,
              }}
            />
          )
        })}
      </Fragment>
    )
  }
}

export default Squares
