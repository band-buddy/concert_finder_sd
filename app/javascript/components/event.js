import React, {Component} from 'react';
import Pop from './modal.js';
import Header from 'components/header.js';

export default class Events extends Component {
   render(){
     return(
      <li>
        <div className="title">{this.props.event.title}</div>
        <div>{this.props.event.venue_name}</div>
        <div>{this.props.event.start_time}</div>
        <div>{this.props.event.venue_address} - {this.props.event.city_name} - {this.props.event.country_abbr} - {this.props.event.postal_code}</div>
        <div>
          <Pop
            title={this.props.event.title}
            venue={this.props.event.venue_name}
            time={this.props.event.start_time}
            address={this.props.event.venue_address}
            city={this.props.event.city_name}
            country={this.props.event.country_abbr}
            postal={this.props.event.postal_code}
            description={this.props.event.description}
          />
        </div>
      </li>
     )
   }
}
