import React, { Fragment } from "react"
import { If, Then, Else } from "react-if"
import PostItem from "./post-item"
import { Row } from "reactstrap"

const PostList = ({ posts, isHome }) => {
  return (
    <Fragment>
      <If condition={posts.length > 0}>
        <Then>
          <Row>
            {posts.map(({ node }, key) => {
              const { title, date, featuredImage } = node.frontmatter
              const { slug } = node.fields
              return (
                <PostItem
                  title={title}
                  image={featuredImage.childImageSharp.fixed}
                  date={date}
                  slug={slug}
                  key={key}
                  id={key}
                  isHome={isHome}
                />
              )
            })}
          </Row>
        </Then>
        <Else>
          <h3>No Post..</h3>
        </Else>
      </If>
    </Fragment>
  )
}

export default PostList
