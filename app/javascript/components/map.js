import React, { Component } from 'react';
import Pin from './pin.js'
import GoogleMap from 'google-map-react';

export default class Map extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: this.props.googleApiKey}}
          center={this.props.center}
          zoom={this.props.zoom}
        >
          {this.props.pins.map((pinProps)=>{
            return <Pin key={pinProps.title} {...pinProps} />
          })}
        </GoogleMap>
      </div>
    )
  }
}
