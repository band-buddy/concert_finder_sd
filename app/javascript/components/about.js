import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: [
        {
          name: "Greg Foreman",
          image: "/assets/greg.jpg",
          description: "Greg moved to San Diego from Chicago to pursue his careeer in Web Development. When he's not busy creating cool apps, he likes to surf, ride his bike, and dabble in photography. And, he loves music."
        },
        {
          name: "Ryan Wehr",
          image: "/assets/ryan.jpg",
          description: "Ryan is our San Diegan native. When he's not busy creating cool apps, well, he's busy writing other code in his Minecraft server. But, like the rest of us, he digs music."
        },
        {
          name: "Veronica Basch",
          image: "/assets/vero.jpg",
          description: "Originally from Michigan, Veronica lived all over the place before landing in San Diego. When she's not busy creating cool apps, she can be found in the ocean surfing, hanging out at the beach, or going to concerts. And of course, she loves music."
        },
        {
          name: "Tim Petrone",
          image: "/assets/Tim-Wedding-Dance.jpg",
          description: "Tim hails from New York but left that hectic life to dive in to the hectic web development life in San Diego. When he's not busy creating cool apps, he is watching baseball, watching movies, or playing video games. Or listening to music!"
        },
        {
          name: "Kiah Stroud",
          image: "/assets/kiah.jpg",
          description: "He wasn't born there, but Kiah was in Washington State before coming to San Diego 6 years go. When he's not busy creating cool apps, he is into books, audiobooks, and podcasts. And, you guessed it, he likes music!"
        },
      ]
    }
  }

  render() {
    let people = this.state.profile.map(function(p, i) {
      return (
        <div className={"event-card"} key={i}>
            <div className={"event-card-image"}>
              <img src={p.image} alt="Show Image" />
            </div>
            <div className={"event-card-heading"}>
              <h3>{p.name}</h3>
            </div>
            <div className={"event-card-content"}>
              <p>{p.description}</p>
            </div>
        </div>
      )
    });
    return(
      <div className="event_section">
        <h1>Meet The Team</h1>
          <div className="meet-the-people">
            {people}
          </div>
      </div>
    )
  }
}
