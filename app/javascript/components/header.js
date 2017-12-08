import React, { Component } from 'react';


export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbar1: [
        {
          name: "Home",
          link: "http://localhost:3000/"
        },
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
          link: "/user/sign_in"
        }
      ]
    }
  }

  render() {
    let navItems = this.state.navbar1.map(function(x, i) {
      return (
        <li key={i}><a href={x.link}>{x.name}</a></li>
      )
    });
    return(
      <nav>
        <ul className="navBar">
          {navItems}
        </ul>
      </nav>
    )
  }
}
