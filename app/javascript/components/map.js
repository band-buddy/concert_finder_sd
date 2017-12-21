import React, { Component } from 'react';
import Pop from './modal.js'
import Events from './event.js';
import GoogleMap from 'google-map-react';

export default class Map extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: 'AIzaSyAAuaeLQhFzpsIMndOjomyCQyCCJN_V4PI'}}
          center={[this.props.latitude,this.props.longitude]}
          zoom={16}
        >
        </GoogleMap>
        <h3>{this.props.latitude} {this.props.longitude}</h3>
      </div>
    )
  }
}
