import React from "react"
import Layout from "../components/layout"
import PostContainer from "../components/postContainer"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <PostContainer
        id=''
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
        body={post.html}
        to={post.fields.slug}
      />
    </Layout>
  )
}

export const query = graphql`
query ($slug: String!) {
  markdownRemark(fields: {slug: { eq: $slug } }) {
    html
    timeToRead
    frontmatter {
      title
      date(formatString: "MMMM DD, YYYY")
    }
    fields {
      slug
    }
  }
}
`