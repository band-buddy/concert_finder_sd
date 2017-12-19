import React, { Component } from 'react';


export default class AppInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: [
        {
          icon: "/assets/find_concert.jpg",
          title: "Search for a concert",
          description: "Search for a concert, band, or local venue in San Diego using our search function.  Our concerts are updated regularly so check back often!",
          link: "/events",
          linkName: "Search Concert"
        },
        {
          icon: "/assets/create_profile.jpg",
          title: "Create a profile.",
          description: "Sign up and create a personalized profile page",
          link: "/user/sign_up",
          linkName: "Signup Today"
        },
        {
          icon: "/assets/find_friend",
          title: "Add events to your profile",
          description: "Keep track of your upcoming shows! Head over to the Events page, click on 'more info', and add that event directly to your profile page.",
          link: "/events",
          linkName: "Add Events"
        }
      ]
    }
  }
    render() {
      let cardItems = this.state.info.map(function(s, i) {
        return (
            <div className={"card-align"} key={i}>
              <div className={"flex-card"}>
                <div className={"flex-card-image"}>
                  <img src={s.icon} alt="Show Image" />
                </div>
                <div className={"flex-card-heading"}>
                  <h3>{s.title}</h3>
                <div className={"flex-card-content"}>
                  <p>{s.description}</p>
                </div>
                <div className={"flex-card-link"}>
                  <a href={s.link}>{s.linkName}</a>
                </div>
              </div>
              </div>
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
