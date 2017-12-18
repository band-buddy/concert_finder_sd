import React, {Component} from 'react';
import Pop from './modal.js';
import Header from 'components/header.js';

export default class Events extends Component {

   render(){
     function addEvent(){
       console.log(event.venue_name + "has been clicked")
       // send all pertinent data in an object to the profile edit page
       console.log(event)
       // finally, change button content to "Added to your profile"
     }
     var event = this.props.event
     return(
      <li>
        <div className="title">{event.title}</div>
        <div>{event.venue_name}</div>
        <div>{event.start_time}</div>
        <div>{event.venue_address} - {event.city_name} - {event.country_abbr} - {event.postal_code}</div>
        <div>
          <Pop
            title={event.title}
            venue={event.venue_name}
            time={event.start_time}
            address={event.venue_address}
            city={event.city_name}
            country={event.country_abbr}
            postal={event.postal_code}
            description={event.description}
          />
          <form action="">
          <button onClick={addEvent}>Add this event to your profile!</button>
          </form>
        </div>
      </li>
     )
   }
}
