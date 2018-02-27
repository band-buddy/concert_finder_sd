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
  constructor(props){
    super(props)
    this.state = {
      user: this.props.user
    }
  }

   render(){
     function added_to_profile() {
         alert("Event added to profile!")
     }

     function addEvent(){
       var profile_event = {title: event.title, start_time: event.start_time, venue: event.venue_name}
     }
     var event = this.props.event
     var current_user = this.props.user
     var lat = parseFloat(event.latitude)
     var long = parseFloat(event.longitude)

     return(
      <li className="event-list-border">
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
            user = {this.props.user}
            latitude={lat}
            longitude={long}

            style={customStyles}
          />

          <form action="/attendances" method="post" onSubmit={added_to_profile} >
            <input type="hidden" value={event.title} name="title" />
            <input type="hidden" value={event.start_time} name="date" />
            <input type="hidden" value={event.venue_name} name="venue" />
            <input type="hidden" value={event.id} name="eventful_identifier" />
            <input className="modal_button" type="submit" value="Add to profile!" />
          </form>
        </div>
      </li>
     )
   }
}
