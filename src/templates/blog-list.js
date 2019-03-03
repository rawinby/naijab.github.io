import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import PostList from "../components/post/post-list"
import Layout from "../components/container/layout"
import { Pagination, PaginationItem, Row } from "reactstrap"

class BlogListTemplate extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={siteTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <PostList posts={posts} />
        <Row className="d-flex justify-content-center mt-2 mb-5">
          <Pagination>
            {!isFirst && (
              <PaginationItem>
                <Link className="page-link" to={prevPage}>
                  {" << "}
                </Link>
              </PaginationItem>
            )}
            {Array.from({ length: numPages }, (_, i) => (
              <PaginationItem className={currentPage == i + 1 ? "active" : ""}>
                <Link className="page-link" to={`/${i === 0 ? "" : i + 1}`}>
                  {i + 1}
                </Link>
              </PaginationItem>
            ))}
            {!isLast && (
              <PaginationItem>
                <Link className="page-link" to={nextPage}>
                  {" >> "}
                </Link>
              </PaginationItem>
            )}
          </Pagination>
        </Row>
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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
