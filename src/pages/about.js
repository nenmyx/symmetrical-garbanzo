import React from "react"
import Layout from "../components/layout"

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
        <a href="https://fediverse.nenmyx.dev/nenmyx" target="_blank" rel="noopener noreferrer me">Pleroma</a>!
        </p>
        <h2>Privacy</h2>
        <p>
        </p>

      </Layout>
    )
  }
}

export default About;
