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
          name: "About",
          link: "/about"
        },
        {
          name: "Events",
          link: "/events"
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
      <ul>
        {navItems}
        <li id="signup"><a href="/user/sign_up">Sign Up</a></li>
      </ul>
    )
  }
}
