import React from "react"
import { Link } from "gatsby"

const TagPostItem = props => {
  return (
    <li>
      <Link to={props.slug}>{props.title}</Link>
    </li>
  )
}

export default TagPostItem
