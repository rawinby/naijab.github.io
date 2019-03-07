import React, { Fragment } from "react"
import { Container } from "reactstrap"
import NavBar from "../menu/navbar"
import Footer from "../footer/footer"
import SEO from "../seo/seo"

const Layout = props => {
  const containerStyle = props.isSmall ? "post-container" : "default-container"
  return (
    <Fragment>
      <SEO
        title={props.title}
        featuredImage={props.featuredImage}
        description={props.description}
        keywords={props.keywords}
        slug={props.slug}
      />
      <NavBar />
      <Container className={containerStyle}>{props.children}</Container>
      <Footer />
    </Fragment>
  )
}

export default Layout
