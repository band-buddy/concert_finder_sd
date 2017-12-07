import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbar: [
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Calendar",
          link: "/events"
        },
        {
          name: "Login",
          link: "/users/sign_in"
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
        <nav>
          <ul className="navBar">
            {navItems}
            <li id="signup"><a href="#">Sign Up</a></li>
          </ul>
        </nav>
      </header>
    )
  }
}
