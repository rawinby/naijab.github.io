import React from "react"
import { graphql } from "gatsby"
import { postListFromTag } from "../utils/utility"
import TagPostList from "../components/tag-post/tag-post-list"
import TagLayout from "../components/container/tag-layout"

const WebCategoryPage = props => {
  const { lastUpdate } = props.data.site.siteMetadata
  const posts = props.data.allMarkdownRemark.edges
  const reactPosts = postListFromTag(posts, `react`)

  return (
    <TagLayout title="Web" lastUpdate={lastUpdate} location={props.location}>
      <TagPostList tagTitle="React" posts={reactPosts} />
    </TagLayout>
  )
}

export default WebCategoryPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        lastUpdate
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2000
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`
