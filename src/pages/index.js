import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/container/layout"
import PostList from "../components/post/post-list"
import { Button, Row } from "reactstrap"
import { If, Then } from "react-if"

const HomePage = props => {
  const posts = props.data.allMarkdownRemark.edges

  return (
    <Layout
      location={props.location}
      title="just a lonely man likes coding"
      keywords={[
        "javascript",
        "react",
        "angular",
        "vue",
        "laravel",
        "website dev",
        "android",
        "พัฒนาเว็บไซต์",
        "เขียนเว็บ",
        "เขียนแอพ",
      ]}
      isHome
    >
      <PostList posts={posts} isHome />
      <Row className="d-flex justify-content-center mt-2 mb-5">
        <If condition={posts.length >= 11}>
          <Then>
            <Link to="2">
              <Button color="primary" size="lg">
                บทความเพิ่มเติม
              </Button>
            </Link>
          </Then>
        </If>
      </Row>
    </Layout>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 11
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
