// TODO: Display post tags somewhere
import React from "react"
import { rhythm } from "../utils/typography"
import { css } from "@emotion/react"
import { Link } from "gatsby"

export default ( props ) => (
  <div key={props.id}>
    <Link to={props.to}>
      <h3 css={css`
        margin-bottom: ${rhythm(1 / 4)};
      `}
      >
        {props.title} {" "}
        <span css={css`
          color: #bbb;
          float: right;
        `}
        >
          {props.date}
        </span>
      </h3>
    </Link>
    <p css={css`
      margin-bottom: ${rhythm(1)};
    `}
    >
      <em>
        {props.timeToRead} minute read
      </em>
    </p>
    <div dangerouslySetInnerHTML={{ __html: props.body}} />
  </div>
)
