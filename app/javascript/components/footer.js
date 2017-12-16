import React, { Component } from 'react';


export default class Footer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      footer: [
        {
          name: "Meet the Team",
          link: "/about"
        },
        {
          name: "Press",
          link: "#"
        }
      ]
    }
  }

  render() {
    let footerItems = this.state.footer.map(function(x, i) {
      return (
            <div key={i}><a href={x.link}>{x.name}</a></div>
      )
    });
    return(
      <footer>
        {footerItems}
        <div className="footer-images">
          <a href="https://www.facebook.com" target="_blank"><img src="/assets/if_facebook_online_social_media_734399.png" /></a>
          <a href="https://www.instagram.com" target="_blank"><img src="/assets/if_instagram_online_social_media_734394.png" /></a>
          <a href="https://www.twitter.com" target="_blank"><img src="/assets/if_online_social_media_twitter_734377.png" /></a>
        </div>
        <div>
          <p>Created by theSpliceGirls &#169;2017</p>
        </div>
        <div>
        <p><a href="#">Terms</a> | <a href="#">Privacy</a></p>
        </div>
      </footer>
    )
  }
}
