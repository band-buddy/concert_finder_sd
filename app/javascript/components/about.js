import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: [
        {
          name: "Greg Foreman",
          image: "http://bobmakeslogos.com/wp-content/uploads/2014/08/bob-ostrom-greg-logo-animation.gif",
          description: "Don't let the name fool you! Greg, aka 'Scary Splice', is actually a really nice guy. He's our mastermind CSS guy, and that's why our pages look so swell."
        },
        {
          name: "Veronica Basch",
          image: "https://media.giphy.com/media/xTk9ZWFeeZp8fi6mFG/giphy.gif",
          description: "She's Sporty Splice and she keeps people in line. Often called 'mom' or 'gramma V-Ron', she makes sure the kids in the group eat properly, get enough sleep, and code their faces off."
        },
        {
          name: "Ryan Wehr",
          image: "https://i.ytimg.com/vi/OZ7VWJa-yrs/maxresdefault.jpg",
          description: "Though he might be the biggest, Ryan, aka 'Baby Splice', is the youngest of the group. He's our San Diegan, and helped with everything, since he's young and still has energy."
        },
        {
          name: "Tim Petrone",
          image: "http://images.teamsugar.com/files/upl1/1/13839/35_2008/tim_bg.preview.jpg",
          description: "Meet the database wizard, Posh Splice (aka Tim). He hails from New York and brings the hustle of the city with him."
        },
        {
          name: "Kiah Stroud",
          image: "http://laoblogger.com/images/ben-clipart-10.jpg",
          description: "He's not a ginger to most people, but he is to us! Kiah, aka 'Ginger Splice', has lots of logic underneath that ginger (brown) hair."
        },
      ]
    }
  }

  render() {
    let people = this.state.profile.map(function(p, i) {
      return (
        <div className={"card-align"} key={i}>
              <ul className={"flex-card-list"}>
                <li className={"flex-card-listitem"}>
                  <div className={"flex-card"}>
                    <div className={"flex-card-image"}>
                      <img src={p.image} alt="Show Image" />
                    </div>
                    <div className={"flex-card-heading"}>
                      <h3>{p.name}</h3>
                      <p>{p.description}</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
      )
    });
    return(
        <nav>
            {people}
        </nav>
    )
  }
}
