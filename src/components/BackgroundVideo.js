import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import Image from './Image'

import './BackgroundVideo.css'

class BackgroundVideo extends Component {
  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }
  state = {
    playing: false,
    mobileWidth: false
  }

  updateDimensions() {
    this.setState({ mobileWidth: window.innerWidth < 700 })
  }

  handelPlay(e) {
    this.setState({
      playing: true
    })
    ReactDOM.findDOMNode(this.ref.current).removeEventListener(
      'playing',
      this.handelPlay
    )
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', () => this.updateDimensions())
    ReactDOM.findDOMNode(this.ref.current).addEventListener('playing', e =>
      this.handelPlay(e)
    )
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions)
  }

  render() {
    const { poster, children, imgClassName = '' } = this.props
    return (
      <Fragment>
        {!this.state.mobileWidth && (
          <div className={`BackgroundVideo`}>
            <video
              ref={this.ref}
              poster={poster}
              className={`BackgroundVideo--video ${this.state.playing ? 'playing' : ''
                } `}
              playsInline
              autoPlay
              muted
              preload="auto"
            >
              {children}
            </video>
          </div>
        )}
        {this.state.mobileWidth && (
          <div>
            <Image background src={poster} alt="Home poster" />
            <div className="VideoPoster--Graident" />
            <div className="VideoPoster--Overlay" />
          </div>
        )}
      </Fragment>
    )
  }
}

export default BackgroundVideo
