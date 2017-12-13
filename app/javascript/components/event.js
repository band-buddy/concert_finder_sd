import React, {Component} from 'react';
import Pop from './modal.js';

export default class Events extends Component {
  constructor(props){
    super(props)
    this.state = {
      // events: this.props.events ? this.props.events.events.event : []
      // events: this.props.default ? this.props.default.events.event : this.props.events.events.event
      events: this.props.events
      // events: this.props.events.events.event
      // default: this.props.default
    }
  }

  // updateSearch(term) {
  //   var newEvent = Event.for term
  //   this.setState({events: this.props.events})
  // }


  render(){
     return(
      <div>
        <table>
          <thead className="thStyles">
            <tr>
              <th>Artist</th>
              <th>Venue</th>
              <th>Start Time</th>
              <th>Address</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody className="tbStyles">
            {this.state.events.map((event)=>{
              return (
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.venue_name}</td>
                  <td>{event.start_time}</td>
                  <td>{event.venue_address} - {event.city_name} - {event.country_abbr} - {event.postal_code}</td>
                  <td><Pop title={event.title} venue={event.venue_name} time={event.start_time} address={event.venue_address} city={event.city_name} country={event.country_abbr} postal={event.postal_code} description={event.description} /></td>
                </tr>
              )}
            )}
          </tbody>
        </table>
        </div>
     )
   }
}
