import React from "react"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/core"
import { graphql, StaticQuery, Link } from "gatsby"

// Inline component for nav links
const NavEntry = props => (
  <li css={css`
    display: inline-block;
    marginRight: ${rhythm(1)};
  `}
  >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

// Navigation bar. Extracted for future and readability.
const NavBar = () => (
  <ul css={css`
    float: right;
    listStyle: none;
    padding-top: ${rhythm(0.6)};
  `}
  >
    <NavEntry to="/about/">About</NavEntry>
  </ul>
)

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            blurb
          }
        }
      }
    `
  }
  render={data => (
    <div css={css`
      margin: auto;
      padding: 0 ${rhythm(1)};
      padding-top: ${rhythm(1)};
      max-width: 750px;
    `}
    >
      <header>
        <Link to="/" >
          <h1 css={css`
            display: inline;
          `}
          >
            {data.site.siteMetadata.title}
          </h1>
        </Link>
        <NavBar />
        <p>
          <em>{data.site.siteMetadata.blurb}</em>
        </p>
      </header>
      {children}
    </div>
  )}
  />
)