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

              <div
                className="d-md-none menu-mobile-trigger"
                onClick={() => toggle(!isOpen)}
              >
                MENU
              </div>

              <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <Link to="/life" className="nav-link">
                      LiFE
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/programming" className="nav-link">
                      PROGRAMMING
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
