import React, { Fragment } from "react"
import { Container } from "reactstrap"
import Footer from "../footer/footer"

const Layout = props => {
  return (
    <Fragment>
      <Container className="default-container">{props.children}</Container>
      <Footer />
    </Fragment>
  )
}

export default Layout
