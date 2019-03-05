import React, { useState } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap"
import { StaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const NavBar = () => {
  const [isOpen, toggle] = useState(false)

  return (
    <StaticQuery
      query={logoQuery}
      render={data => {
        return (
          <Navbar
            color="light"
            fixed="top"
            dark
            expand="md"
            className="navbar-red-shadow"
          >
            <Container>
              <Link to="/" className="navbar-brand">
                <Image
                  fixed={data.logoImage.childImageSharp.fixed}
                  className="align-middle"
                />
              </Link>
              <NavbarToggler onClick={() => toggle(!isOpen)} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/app" className="nav-link">
                      APP
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/web" className="nav-link">
                      WEB
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/game" className="nav-link">
                      GAME
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/tech" className="nav-link">
                      TECH
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/life" className="nav-link">
                      LiFE
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/all" className="nav-link">
                      ALL
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
        )
      }}
    />
  )
}

const logoQuery = graphql`
  query logoQuery {
    logoImage: file(absolutePath: { regex: "/logo-naijab-with-text.png/" }) {
      childImageSharp {
        fixed(height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default NavBar