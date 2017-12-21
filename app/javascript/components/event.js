import React, {Component} from 'react';
import Pop from './modal.js';
import Map from './map.js'
import Header from 'components/header.js';

const customStyles = {
  content : {
      backgroundColor: 'rgba(255, 255, 255, 0)'
  }
};

export default class Events extends Component {

   render(){
     function addEvent(){
       var profile_event = {title: event.title, start_time: event.start_time, venue: event.venue_name}
       console.log(profile_event)
     }
     var event = this.props.event
     var lat = parseFloat(event.latitude)
     var long = parseFloat(event.longitude)
     return(
      <li className="event-list-border">
        <h3>{lat} {event.longitude}</h3>
        <h3>{event.title}</h3>
        <div>{event.venue_name}</div>
        <div>{event.start_time}</div>
        <div>{event.venue_address} - {event.city_name} - {event.country_abbr} - {event.postal_code}</div>
        <div>

          <Pop
            id={event.id}
            title={event.title}
            venue={event.venue_name}
            time={event.start_time}
            address={event.venue_address}
            city={event.city_name}
            country={event.country_abbr}
            postal={event.postal_code}
            description={event.description}
            latitude={lat}
            longitude={long}
            style={customStyles}
          />

          <button className="event-list-buttons" onClick={addEvent}>Add this event to your profile!</button>
        </div>
      </li>
     )
   }
}
