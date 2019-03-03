import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/container/layout"
import SEO from "../components/seo"
import PostList from "../components/post/post-list"
import { Button, Row } from "reactstrap"
import { If, Then } from "react-if"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
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
        />
        <PostList posts={posts} />
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
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
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
          }
        }
      }
    }
  }
`
