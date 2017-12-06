import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbar: [
        {
          name: "About",
          link: "#"
        },
        {
          name: "Calendar",
          link: "#"
        },
        {
          name: "Login",
          link: "#"
        }
      ]
    }
  }

  render() {
    let navItems = this.state.navbar.map(function(x, i) {
      return (
        <li key={i}><a href={x.link}>{x.name}</a></li>
      )
    });
    return(
      <header>
      <ul>
        {navItems}
        <li id="signup"><a href="#">Sign Up</a></li>
      </ul>
      </header>
    )
  }
}
