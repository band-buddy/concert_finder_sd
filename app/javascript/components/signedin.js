import React, { Component } from 'react';

export default class SignedIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navbar2: [
        {
          name: "Home",
          link: "http://localhost:3000/"
        },
        {
          name: "Events",
          link: "/events"
        },
        {
          name: "About",
          link: "/about"
        },
        {
          name: "Login",
          link: "/user/login"
        }
      ]
    }
  }

  render() {
    let navItems = this.state.navbar2.map(function(x, i) {
      return (
        <li key={i}><a href={x.link}>{x.name}</a></li>
      )
    });
    return(
      <ul id="menu">
        {navItems}
        <li id="signup"><a href="/user/sign_up">Sign Up</a></li>
      </ul>
    )
  }
}
