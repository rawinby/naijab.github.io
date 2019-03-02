import React from "react"
import { PropTypes } from "prop-types"
import { Link } from "gatsby"
import { rhythm } from "../../utils/typography"

const PostItem = ({ title, slug, date }) => {
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none` }} to={slug}>
          {title}
        </Link>
      </h3>
      <small>{date}</small>
    </div>
  )
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default PostItem
