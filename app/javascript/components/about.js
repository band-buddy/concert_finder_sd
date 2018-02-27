import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: [
        {
          name: "GREG FOREMAN",
          image: "/assets/Greg-F.png",
          description: "Greg moved to San Diego from Chicago to pursue his careeer in Web Development. When he's not busy creating cool apps, he likes to surf, ride his bike, and dabble in photography. And, he loves music.",

        },
        {
          name: "RYAN WEHR",
          image: "/assets/Ryan-W.png",
          description: "Ryan is our San Diegan native. When he's not busy creating cool apps, well, he's busy writing other code in his Minecraft server. But, like the rest of us, he digs music.",
          current: "https://open.spotify.com/embed/album/5OZJflQcQCdZLQjtUudCin"
        },
        {
          name: "VERONICA BASCH",
          image: "/assets/vero-b.png",
          description: "Originally from Michigan, Veronica lived all over the place before landing in San Diego. When she's not busy creating cool apps, she can be found in the ocean surfing, hanging out at the beach, or going to concerts. And of course, she loves music.",

        },
        {
          name: "TIM PETRONE",
          image: "/assets/tim-p.png",
          description: "Tim hails from New York but left that hectic life to dive in to the hectic web development life in San Diego. When he's not busy creating cool apps, he is watching baseball, watching movies, or playing video games. Or listening to music!",

        },
        {
          name: "KIAH STROUD",
          image: "/assets/kaih-2.png",
          description: "He wasn't born there, but Kiah was in Washington State before coming to San Diego 6 years go. When he's not busy creating cool apps, he is into books, audiobooks, and podcasts. And, you guessed it, he likes music!",
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
              <p>{p.description}</p><br />
            </div>
        </div>
      )
    });
    return(
      <div className="meet-the-people">
            {people}
      </div>
    )
  }
}
