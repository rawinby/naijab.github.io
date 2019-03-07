import React from "react"
import { Link, graphql } from "gatsby"
import AuthorCard from "../components/card/AuthorCard"
import Layout from "../components/container/layout"
import DisqusComment from "../components/comment/disqus"
import TagList from "../components/tag/tag-list"

const BlogPostTemplate = props => {
  const post = props.data.markdownRemark
  const { previous, next } = props.pageContext

  return (
    <Layout
      title={post.frontmatter.title}
      featuredImage={post.frontmatter.featuredImage.publicURL}
      description={post.frontmatter.description || post.excerpt}
      slug={props.location.pathname}
      isSmall
    >
      <h1>{post.frontmatter.title}</h1>
      <span className="post-date">{post.frontmatter.date}</span>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <TagList tags={post.frontmatter.tags} />
      <hr />
      <AuthorCard />
      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              {"<-"} {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} {"->"}
            </Link>
          )}
        </li>
      </ul>
      <DisqusComment title={post.frontmatter.title} id={post.id} />
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
            fluid(maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
