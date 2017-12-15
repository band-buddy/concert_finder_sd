import React, {Component} from 'react'
import Events from 'components/event.js'

export default class EventsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      // events: this.props.events ? this.props.events.events.event : []
      events: this.props.events
    }
  }

  render(){
    var events = this.state.events.map((event, i)=>{
      return (
        <Events key={i} event={event} />
      )}
    )
    return(
      <ul className="events-list">
        {events}
      </ul>
    )
  }
}
