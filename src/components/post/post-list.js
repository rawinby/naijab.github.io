import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { If, Then, Else } from "react-if"
import PostItem from "./post-item"

const PostList = ({ posts }) => {
  return (
    <Fragment>
      <If condition={posts.length > 0}>
        <Then>
          {posts.map(({ node }, key) => {
            const { title, date } = node.frontmatter
            const { slug } = node.fields
            return <PostItem title={title} date={date} slug={slug} key={key} />
          })}
        </Then>
        <Else>
          <h3>No Post..</h3>
        </Else>
      </If>
    </Fragment>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default PostList
