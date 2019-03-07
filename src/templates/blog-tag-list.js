import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/container/layout"
import PostList from "../components/post/post-list"
import { Row, Col } from "reactstrap"

const BlogTagListTemplate = props => {
  const { data } = props
  const { tag } = props.pageContext
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
      <Row>
        <Col sm="12">
          <h1>tag === {tag}</h1>
        </Col>
      </Row>
      <PostList posts={posts} />
    </Layout>
  )
}

export default BlogTagListTemplate

export const pageQuery = graphql`
  query blogTagListPageQuery($tag: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            featuredImage {
              childImageSharp {
                fixed(width: 350, height: 160) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
