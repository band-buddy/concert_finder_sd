import React, { Component } from 'react';


export default class AppInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [
        {
          icon: "http://via.placeholder.com/400x250",
          title: "Search for a concert",
          description: "Search for a concert, band, or local venue in San Diego using our search function.  Our concerts are updated regularly so check back often!",
          link: "#",
          linkName: "Search Concert"
        },
        {
          icon: "http://via.placeholder.com/400x250",
          title: "Create a profile.",
          description: "Sign up and let others know about the concerts your going to.",
          link: "#",
          linkName: "Update Your Profile"
        },
        {
          icon: "http://via.placeholder.com/400x250",
          title: "Find a friend",
          description: "Looking for concert buddies? Check to see who else is going to the show and link up with them before the concert.",
          link: "#",
          linkName: "Signup Today"
        }
      ]
    }
  }
    render() {
      let cardItems = this.state.info.map(function(s, i) {
        return (
            <div className={"card-align"} key={i}>
              <ul className={"flex-card-list"}>
                <li className={"flex-card-listitem"}>
                  <div className={"flex-card"}>
                    <div className={"flex-card-image"}>
                      <img src={s.icon} alt="Show Image" />
                    </div>
                    <div className={"flex-card-heading"}>
                      <h3>{s.title}</h3>
                    <div className={"flex-card-content"}>
                      <p>{s.description}</p>
                      <a href={s.link} className={"flex-card-link"}>{s.linkName}</a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
        )
      });
      return(
        <div className="homeCard">
          {cardItems}
        </div>

      )
    }
  }
