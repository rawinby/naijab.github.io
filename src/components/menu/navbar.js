import React, { useState } from "react"
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap"
import { Link } from "gatsby"

const NavBar = () => {
  const [isOpen, toggle] = useState(false)

  return (
    <Navbar
      color="light"
      fixed="top"
      dark
      expand="md"
      className="navbar-red-shadow"
    >
      <Container>
        <NavbarBrand href="/">naijab.com</NavbarBrand>
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
}

export default NavBar
