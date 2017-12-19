import React, { Component } from 'react';
import Header from 'components/header.js';
import Footer from 'components/footer.js'
import AppInfo from 'components/appinfo.js';

export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      events: this.props.events
    }
  }

  render (){
    return(
        <div>
          <div className="home-top-section">
            <h1 className="fade-text h1-media-query">BandSurf</h1>
            <h2 className="fade-text h2-media-query">Find the best concerts in San Diego.<br />Meet new friends.</h2>
            <form action="events" method="get">
              <input className="home-search-bar" name="keyword_search" type='text' placeholder="Search for events by band name or venue"/><br></br>
              <button className="home-search-button" type="submit">Search Events!</button>
            </form>
          </div>
          <div className="home-cards-section">
          <AppInfo />
          </div>
        </div>
    )
  }
}
