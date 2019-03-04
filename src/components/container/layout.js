import React, { Fragment } from "react"
import { Container } from "reactstrap"
import NavBar from "../menu/navbar"
import Footer from "../footer/footer"
import SEO from "../seo"

const Layout = props => {
  const containerStyle = props.isHome ? "home-container" : "default-container"
  return (
    <Fragment>
      <SEO
        title={props.title}
        description={props.description}
        keywords={props.keywords}
      />
      <NavBar />
      <Container className={containerStyle}>{props.children}</Container>
      <Footer />
    </Fragment>
  )
}

export default Layout
