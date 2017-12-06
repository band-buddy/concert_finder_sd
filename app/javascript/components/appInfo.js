import React, { Component } from 'react';


export default class AppInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [
        {
          icon: "icon1",
          title: "Search for music",
          description: "This is how you search for music.",
          link: "link"
        },
        {
          icon: "icon2",
          title: "Create a profile.",
          description: "This is how you create a profile.",
          link: "link"
        },
        {
          icon: "icon3",
          title: "Find a friend",
          description: "This is how you find a friend.",
          link: "link"
        }
      ]
    }
  }

    render() {
      return(
        <div className="homeCard">
          this is some text.
          // look at theater app to enter the divs for cards.
        </div>
      )
    }
  }
