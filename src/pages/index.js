import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import PostContainer from "../components/postContainer"

export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <PostContainer
        id={node.id}
        title={node.frontmatter.title}
        date={node.frontmatter.date}
        timeToRead={node.timeToRead}
        body={node.excerpt}
        to={node.fields.slug}
      />
    ))}
  </Layout>
)

export const query = graphql`
query {
  allMarkdownRemark(
    sort: {
      fields: [frontmatter___date],
      order: DESC
    })
    {
    totalCount
    edges {
      node {
        id
        timeToRead
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
        fields {
          slug
        }
      }
    }
  }
}
`