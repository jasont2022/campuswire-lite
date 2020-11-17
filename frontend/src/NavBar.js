/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import s from 'styled-components'
import { Navbar, Nav } from 'react-bootstrap'

const Button = s.button`
  width: 100px;
  border: none;
  padding: 5px 10px;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #E1306C, #FD1D1D);
`

const NavBar = ({
  user, setErrMsg, count, setCount,
}) => {
  const logout = async () => {
    try {
      await axios.post('/account/logout')
      setCount(count + 1)
    } catch (err) {
      setErrMsg(`${err}`)
    }
  }

  return (
    <Navbar expand="lg" bg="light" variant="light">
      <Navbar.Brand>Campuswire Lite</Navbar.Brand>
      <Nav className="ml-auto">
        {user === '' || user === null || user === undefined ? (
          <Link to="/login"><Navbar.Text>Login</Navbar.Text></Link>
        ) : (
          <>
            <Navbar.Text style={{ marginRight: '40px' }}>Hi {user}</Navbar.Text>
            <Button onClick={() => logout()}>Logout</Button>
          </>
        )}
      </Nav>
    </Navbar>
  )
}

export default NavBar
