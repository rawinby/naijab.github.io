import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/container/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle} isPostDetail>
        <SEO title="404 Not Found" />
        <h1>404 Not Found</h1>
        <p>
          ขออภัยไม่พบหน้าที่ต้องการ :( <br />{" "}
          <Link to="/all">ลองค้นหาบทความ</Link>
        </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
