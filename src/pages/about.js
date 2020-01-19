import React from "react"
import Layout from "../components/layout"
import { OutboundLink } from "gatsby-plugin-google-analytics"

class About extends React.Component {
  handleOptout() {
    if (typeof window.gaOptout === 'function') {
      window.gaOptout();
    }
  }

  render() {
    return (
      <Layout>
        <h2>About Me</h2>
        <p>Hello, my name is Olivia!</p>
        <p>This is my blog, where I talk about things like:</p>
        <ul>
          <li>software development</li>
          <li>mental health</li>
          <li>the wild world we share</li>
        </ul>
        <p>
          This site is still WIP, my front-end skills need some ironing out.
          If you want to get in touch, feel free to talk to me on&nbsp;
	  <OutboundLink href="https://fediverse.nenmyx.dev/@nenmyx" target="_blank" rel="noopener noreferrer me">Mastodon</OutboundLink>!
        </p>
        <h2>Privacy</h2>
        <p>
          This site uses Google Analytics so that I can better understand how many people are reading, where they came from, and what they are looking at.
          Feel free to take a look at the&nbsp;

          <a href="https://github.com/pobartlett/symmetrical-garbanzo/blob/master/gatsby-config.js" target="_blank" rel="noopener noreferrer">
            site configuration
          </a>

          &nbsp;to see how I have this set up.
          If you have do-not-track headers active, I will not report anything back to Google. I also have the <code>anonymize</code> option on, so that nothing this site sends
          will be personally identifiable.
          Information on the <code>gatsby-plugin-google-analytics</code> plugin can be found&nbsp;

          <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/" target="_blank" rel="noopener noreferrer">
            here
          </a>
          .
        </p>
        <p>
          If this still makes you uncomfortable (I understand), click the button below to deactivate Google Analytics on this site.
          This link sets a cookie (expiring in the year 2099) that tells it not to call in <i>any</i> tracking.
        </p>

        <button
          onClick={this.handleOptout}>Deactivate Google Analytics</button>
      </Layout>
    )
  }
}

export default About;
