import React, {Component} from 'react';

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
            </tr>
          </thead>
          <tbody className="tbStyles">
            {this.state.events && this.state.events.map((event)=>{
              return(
                <tr key={event.id}>
                  <td>{event.title}</td>
                  <td>{event.venue_name}</td>
                  <td>{event.start_time}</td>
                  <td>{event.venue_address} - {event.city_name} - {event.country_abbr} - {event.postal_code}</td>
                </tr>
              )}
            )}
          </tbody>
        </table>
      </div>
     )
   }
}
