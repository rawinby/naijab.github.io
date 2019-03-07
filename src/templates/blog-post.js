import React from "react"
import { graphql } from "gatsby"
import AuthorCard from "../components/card/AuthorCard"
import Layout from "../components/container/layout"
import DisqusComment from "../components/comment/disqus"
import TagList from "../components/tag/tag-list"
import { Row, Col } from "reactstrap"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark

  return (
    <Layout
      title={post.frontmatter.title}
      featuredImage={post.frontmatter.featuredImage.publicURL}
      description={post.frontmatter.description || post.excerpt}
      keywords={post.frontmatter.tags}
      slug={props.location.pathname}
      isSmall
    >
      <h1>{post.frontmatter.title}</h1>
      <span className="post-date">{post.frontmatter.date}</span>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="post-content"
      />
      <TagList tags={post.frontmatter.tags} />
      <hr />
      <Row>
        <Col sm="12" className="d-flex justify-content-center">
          <AuthorCard />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col sm="12">
          <DisqusComment title={post.frontmatter.title} id={post.id} />
        </Col>
      </Row>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        description
        tags
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxHeight: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
