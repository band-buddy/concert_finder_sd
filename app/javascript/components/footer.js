import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      footer: [
        {
          name: "Meet the Team",
          link: "/about",
          class: "meet_terms"
        },
        {
          name: "Terms",
          link: "#",
          class: "meet_terms"
        },
        {
          name: "Press",
          link: "#",
          class: "press_privacy"
        },
        {
          name: "Privacy Policy",
          link: "#",
          class: "press_privacy"
        },
        {
          name: "Social Media Links",
          link: "#",
          class: "links_copyright"
        },
        {
          name: "© Splice Girls 2017"
        }
      ]
    }
  }

  render() {
    let footerItems = this.state.footer.map(function(x, i) {
      return (
        <div key={i}>
          <div className={x.class}>
            <div><a href={x.link}>{x.name}</a></div>
          </div>
        </div>
      )
    });
    return(
      <footer>
        {footerItems}
      </footer>
    )
  }
}
