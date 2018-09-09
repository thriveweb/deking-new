import React, { Component } from 'react'
import { Link } from 'gatsby-link'
import GoogleMapReact from 'google-map-react'

import { MapPin } from 'react-feather'

let mapkey = ''
if (process.env.NETLIFY_MAP_KEY) {
  mapkey = process.env.NETLIFY_MAP_KEY
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: -28.00029,
      lng: 153.43088,
    },
    zoom: 7,
  }

  renderMarkers(map, maps) {
    let marker = new maps.Marker({
      position: myLatLng,
      map,
      title: 'Hello World!',
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
                  { visibility: 'on' },
                ],
              },
            ],
          }}
          bootstrapURLKeys={{
            key: mapkey,
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {locations.map((pin, index) => (
            <Marker key={index} lat={-28.00029} lng={153.43088} />

          ))}
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
