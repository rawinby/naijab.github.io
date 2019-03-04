import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { If, Then, Else } from "react-if"
import PostItem from "./tag-post-item"

const TagPostList = ({ tagTitle, posts }) => {
  return (
    <Fragment>
      <If condition={posts.length > 0}>
        <Then>
          <h3>{tagTitle}</h3>
          <ul>
            {posts.map(({ node }, key) => {
              const { title, date } = node.frontmatter
              const { slug } = node.fields
              return (
                <PostItem
                  title={title}
                  date={date}
                  slug={slug}
                  key={key}
                  id={key}
                />
              )
            })}
          </ul>
        </Then>
        <Else>
          <h3>No Post..</h3>
        </Else>
      </If>
    </Fragment>
  )
}

TagPostList.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default TagPostList
