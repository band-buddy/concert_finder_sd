import React, { Component } from 'react';
import Header from 'components/header.js';

export default class Home extends Component{

  render (){
    return(
        <div>
          <div className="section">
            <p>Find the best concerts in San Diego.<br />
            Meet new friends.</p>
            <form action="events" method="get">
              <input className="homeSearch" type='text' placeholder="Search for events by band name or venue"/>
            </form>
          </div>
        </div>
    )
  }
}
