import React, { Fragment } from "react"
import { Container } from "reactstrap"
import NavBar from "../menu/navbar"
import Footer from "../footer/footer"

const Layout = props => {
  const containerStyle = props.isPostDetail
    ? "default-container"
    : "home-container"
  return (
    <Fragment>
      <NavBar />
      <Container className={containerStyle}>{props.children}</Container>
      <Footer />
    </Fragment>
  )
}

export default Layout
