import React from "react"
import { PropTypes } from "prop-types"
import { Link } from "gatsby"
import { Col, Card, CardBody, CardTitle } from "reactstrap"
import Image from "gatsby-image"

const PostItem = ({ image, title, slug, date }) => {
  return (
    <Col sm={12} className="pb-4">
      <Card className="post-item">
        <Link to={slug}>
          <Image className="card-img-top" fluid={image} />
        </Link>
        <CardBody>
          <CardTitle>
            <Link to={slug}>
              <h5>{title}</h5>
            </Link>
            <small>{date}</small>
          </CardTitle>
        </CardBody>
      </Card>
    </Col>
  )
}

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default PostItem
