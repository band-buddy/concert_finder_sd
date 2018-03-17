import React, { Component } from 'react';
import Header from 'components/header.js';
import Footer from 'components/footer.js'
import AppInfo from 'components/appInfo.js';

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
            <h1 className="fade-text h1-media-query home-header">Band Surf</h1>
            <h2 className="fade-text h2-media-query">Find the best concerts in San Diego.<br />Make new friends.</h2>
            <form action="events" method="get">
              <input className="home-search-bar" name="keyword_search" type='text' placeholder="Search events by band or venue..."/>
              <button className="home-search-events-button"><i id="home-search-button" className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="home-cards-section">
          <AppInfo />
          </div>
        </div>
    )
  }
}
