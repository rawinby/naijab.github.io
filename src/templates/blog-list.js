import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PostList from "../components/post/post-list"
import Layout from "../components/container/layout"
import { Button, Row } from "reactstrap"

class BlogListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
      currentPage - 1 === 1 ? "/" : `/page/${(currentPage - 1).toString()}`
    const nextPage = `/page/${(currentPage + 1).toString()}`

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostList posts={posts} />
        <div className="pt-5 pb-5">
          {!isFirst && (
            <Link to={prevPage}>
              <Button className="float-left">{" << ใหม่กว่านี้"}</Button>
            </Link>
          )}

          {!isLast && (
            <Link to={nextPage}>
              <Button className="float-right">{"เก่ากว่านี้ >> "}</Button>
            </Link>
          )}
        </div>
      </Layout>
    )
  }
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
