import React, { Component } from 'react';
import Header from 'components/header.js';
import Footer from 'components/footer.js'
import AppInfo from 'components/appinfo.js';

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      // events: this.props.events ? this.props.events.events.event : []
      events: this.props.events
    }
  }

  render (){
    return(
        <div>
          <div className="section">
            <p className="fadeText">Find the best concerts in San Diego.<br />
            Meet new friends.</p>
            <form action="events" method="get">
              <input className="homeSearch" name="keyword_search" type='text' placeholder="Search for events by band name or venue"/><br></br>
              <button className="homeButton" type="submit">Search Events!</button>
            </form>
          </div>
          <div className="cardsSection">
          <AppInfo />
          </div>
        </div>
    )
  }
}
