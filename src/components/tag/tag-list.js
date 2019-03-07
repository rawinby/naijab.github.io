import React, { Fragment } from "react"
import { If, Then, Else } from "react-if"
import { Button } from "reactstrap"
import { Link } from "gatsby"

const TagList = ({ tags }) => {
  return (
    <Fragment>
      tags{"() => "}
      <If condition={tags && tags.length > 0}>
        <Then>
          {tags.map(tag => (
            <Link to={`/tag/${tag}`}>
              <Button outline color="danger" size="sm" className="mb-2 mr-2">
                {tag}
              </Button>
            </Link>
          ))}
        </Then>
        <Else>{""}</Else>
      </If>
    </Fragment>
  )
}

export default TagList
