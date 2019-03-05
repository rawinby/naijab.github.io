import React from "react"
import { PropTypes } from "prop-types"
import { Link } from "gatsby"
import { Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import Image from "gatsby-image"

const PostItem = ({ id, image, title, slug, date, isHome }) => {
  const postSizeInHome = id > 1 ? 4 : 6
  return (
    <Col sm={isHome ? postSizeInHome : 4} className="pb-4">
      <Card className="post-item">
        <Image className="card-img-top" fluid={image} />
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
