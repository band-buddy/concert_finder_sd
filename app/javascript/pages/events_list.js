import React, {Component} from 'react'
import Events from 'components/event.js'

export default class EventsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      // events: this.props.events ? this.props.events.events.event : []
      events: this.props.events,
      // user: this.props.user
    }
    var user = this.props.user

  }

  render(){
    if(this.state.events != null && this.state.events.length > 0){
      var events = this.state.events.map((event, i)=>{
        return (
          <Events key={i} event={event} />
        )
      })
      // var sorted_events = events.sort(function(a, b){
      //   return a.start_time > b.start_time
      // })
    } else {
      var events = "Sorry, there are no results!"
    }
    return(
      <ul className="events-list">
        {events}
      </ul>
    )
  }
}
