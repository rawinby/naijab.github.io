import React, { useState } from "react"
import { Container, Collapse, Navbar, Nav, NavItem } from "reactstrap"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const NavBar = () => {
  const [isOpen, toggle] = useState(false)
  const { logoImage } = useStaticQuery(
    graphql`
      query {
        logoImage: file(
          absolutePath: { regex: "/logo-naijab-with-text-dark.png/" }
        ) {
          childImageSharp {
            fixed(height: 32) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  return (
    <Navbar fixed="top" expand="md" className="navbar-white-shadow">
      <Container>
        <Link to="/" className="navbar-brand">
          <Image
            fixed={logoImage.childImageSharp.fixed}
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
              <Link to="/" className="nav-link">
                ALL
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tag/life" className="nav-link">
                LiFE
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tag/programming" className="nav-link">
                PROGRAMMING
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tag/game" className="nav-link">
                GAME
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/tag/tech" className="nav-link">
                TECH
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
