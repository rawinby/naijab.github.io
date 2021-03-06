import React from "react"
import { Link } from "gatsby"
import { Col, Card, CardBody, CardTitle } from "reactstrap"
import Image from "gatsby-image"

const PostItem = ({ image, title, slug, date }) => {
  return (
    <Col sm={4} className="pb-4">
      <Card className="post-item">
        <Link to={slug} className="card-img-top">
          <Image fixed={image} style={{ width: `100%`, objectFit: `cover` }} />
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

export default PostItem
