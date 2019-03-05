import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/container/layout"
import PostList from "../components/post/post-list"
import Pagination from "../components/menu/pagination"

const BlogListTemplate = props => {
  const { data } = props
  const posts = data.allMarkdownRemark.edges
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/page/${(currentPage - 1).toString()}`
  const nextPage = `/page/${(currentPage + 1).toString()}`

  return (
    <Layout>
      <PostList posts={posts} />
      <Pagination
        prevPage={prevPage}
        nextPage={nextPage}
        isFirst={isFirst}
        isLast={isLast}
      />
    </Layout>
  )
}

export default BlogListTemplate

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 250) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
