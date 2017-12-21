import React, { Component } from 'react';
import Pop from './modal.js'
import Events from './event.js';
import Pin from './pin.js'
import GoogleMap from 'google-map-react';

export default class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pin: [
        {title: this.props.title,
         lat: this.props.latitude,
         lng: this.props.longitude
        }
      ]
    }
  }
  render() {
    return (
      <div style={{width: '100%', height: '400px'}}>
        <GoogleMap
          bootstrapURLKeys={{key: 'AIzaSyAAuaeLQhFzpsIMndOjomyCQyCCJN_V4PI'}}
          center={[this.props.latitude,this.props.longitude]}
          zoom={16}
        >
        {this.state.pin.map((pinProps)=>{
          return <Pin key={pinProps.title} {...pinProps} />
        })}
        </GoogleMap>
      </div>
    )
  }
}
