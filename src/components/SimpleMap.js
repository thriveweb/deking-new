import React, { Component } from 'react'
import { Link } from 'gatsby-link'
import GoogleMapReact from 'google-map-react'

import { MapPin } from 'react-feather'

let mapkey = ''
if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class SimpleMap extends Component {
  //https://www.google.com/maps/place/Unit+13%2F22+Mavis+Ct,+Ormeau+QLD+4208/@-27.7537698,153.2431606,16.96z/data=!4m5!3m4!1s0x6b916ad94c48e10d:0x8c8e34eb521d753a!8m2!3d-27.7538949!4d153.2454181
  static defaultProps = {
    center: {
      lat: -27.7537698,
      lng: 153.2431606
    },
    zoom: 9
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!'
    })
  }

  render() {
    const { locations } = this.props
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50rem', width: '100%' }}>
        <GoogleMapReact
          options={{
            styles: [
              {
                stylers: [
                  { saturation: -100 },
                  { gamma: 0.8 },
                  { lightness: 4 },
                  { visibility: 'on' }
                ]
              }
            ]
          }}
          bootstrapURLKeys={{
            key: mapkey
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={this.props.center.lat} lng={this.props.center.lng} />
        </GoogleMapReact>
      </div>
    )
  }
}

export default SimpleMap

const Marker = () => {
  return (
    <div style={{ color: 'red' }}>
      <MapPin />
    </div>
  )
}
