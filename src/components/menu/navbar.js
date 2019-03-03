import React, { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"
import { Link } from "gatsby"

const NavBar = () => {
  const [isOpen, toggle] = useState(false)

  return (
    <Navbar
      color="light"
      fixed="top"
      light
      expand="md"
      className="navbar-light-shadow"
    >
      <NavbarBrand href="/">naijab.com</NavbarBrand>
      <NavbarToggler onClick={() => toggle(!isOpen)} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link to="/app">
              <NavLink>APP</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/web">
              <NavLink>WEB</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/game">
              <NavLink>GAME</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/tech">
              <NavLink>TECH</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/life">
              <NavLink>LiFE</NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/all">
              <NavLink>ALL</NavLink>
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default NavBar
