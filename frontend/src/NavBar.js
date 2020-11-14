/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const NavBar = ({ user }) => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Campuswire Lite</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
)

export default NavBar
