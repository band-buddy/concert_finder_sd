import React, { Component } from 'react';

const PinStyles = {
  fontSize: '24px',
  color: 'red'
}

const TooltipStyles = {
  border: '1px solid red',
  backgroundColor: 'white',
  padding: '5px',
  position: 'absolute',
  bottom: '0px',
  width: '45px'
}

export default class Pin extends Component {
  render(){
    return(
      <div>
        {this.props.$hover &&
          <div style={TooltipStyles}>{this.props.title}</div>
        }
        <div style={PinStyles}><img src="/assets/map-marker-icon.png" width="25px"/></div>
      </div>
    )
  }
}
