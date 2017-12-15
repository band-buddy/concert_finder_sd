import React, { Component } from 'react';
import Header from 'components/header.js';
import Footer from 'components/footer.js'
import AppInfo from 'components/appinfo.js';

export default class Home extends Component{

  render (){
    return(
        <div>
          <div className="section">
            <h1 className="fadeText">Find the best concerts in San Diego.<br />
            Meet new friends.</h1>
            <form action="events" method="get">
              <input className="homeSearch" type='text' placeholder="Search for events by band name or venue"/>
            </form>
          </div>
          <div className="cardsSection">
          <AppInfo />
          </div>
        </div>
    )
  }
}
