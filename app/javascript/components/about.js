import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: [
        {
          name: "Greg Foreman",
          image: "#",
          description: "Add Description."
        },
        {
          name: "Veronica Basch",
          image: "#",
          description: "Add Description."
        },
        {
          name: "Ryan Wehr",
          image: "#",
          description: "Add Description."
        },
        {
          name: "Tim Petrone",
          image: "#",
          description: "Add Description."
        },
        {
          name: "Kiah Stroud",
          image: "#",
          description: "Add Description."
        },
      ]
    }
  }

  render() {
    let people = this.state.profile.map(function(p, i) {
      return (
        <div className={"event-card"} key={i}>
            <div className={"flex-card-image"}>
              <img src={p.image} alt="Show Image" />
            </div>
            <div className={"flex-card-heading"}>
              <h3>{p.name}</h3>
            </div>
            <div className={"flex-card-content"}>
              <p>{p.description}</p>
            </div>
        </div>
      )
    });
    return(
      <div className="event_section">
            {people}
      </div>
    )
  }
}
