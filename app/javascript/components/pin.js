import React, { Component } from 'react';

const PinStyles = {
  fontSize: '24px',
  color: 'red'
}

const TooltipStyles = {
  border: '3px #333 solid',
  backgroundColor: 'white',
  padding: '5px',
  position: 'absolute',
  bottom: '0px',
  width: '150px'
}

const Button = {
  borderRadius: "5px",
  color: "#2D2D2D",
  backgroundColor: "#ecf0f1",
  border: "none",
  textAlign: "center",
  textDecoration: "none",
  fontSize: "12px"
}

export default class Pin extends Component {
  render(){
    var link = "//www.google.com/maps/dir//" + this.props.title
    return(
      <div>
        {this.props.$hover &&
          <div style={TooltipStyles}>{this.props.title}
            <br/>
            <a style={Button} href={link}>Directions</a>
          </div>
        }
        <div style={PinStyles}><img src="/assets/map-marker-icon.png" width="25px"/></div>
      </div>
    )
  }
}
