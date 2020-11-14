/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Alert } from 'react-bootstrap'
import s from 'styled-components'
import axios from 'axios'

const FormWrapper = s.div`
  width: 50%;
  box-sizing: border-box;
  margin: 0 auto;
`

const SubmitButton = s.button`
  width: 100%;
  border: none;
  padding: 17px 32px;
  text-decoration: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #E1306C, #FD1D1D);
  color: white;
  opacity: ${props => (props.disable ? 0.5 : 1)};

  :disabled:hover {
    cursor: not-allowed;
  }
`

const SignUp = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const signUp = async e => {
    e.preventDefault()
    try {
      await axios.post('/account/signup', { username, password })
      history.push('/')
    } catch (err) {
      setErrMsg(`${err}`)
    }
  }

  return (
    <FormWrapper>
      {errMsg !== '' ? (
        <Alert variant="danger" onClose={() => setErrMsg('')} dismissible>
          {errMsg}
        </Alert>
      )
        : null}
      <h1 style={{ textAlign: 'center' }}>Sign Up</h1>
      <Form style={{ marginTop: '1.5em' }}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <SubmitButton
          style={{ margin: '1rem 0' }}
          onClick={e => signUp(e)}
          disabled={username === '' || password === ''}
          disable={username === '' || password === ''}
        >
          Sign Up
        </SubmitButton>
        <p style={{ textAlign: 'center' }}>
          Already have an account?
          <Link to="/login"> Log in here!</Link>
        </p>
      </Form>
    </FormWrapper>
  )
}

export default SignUp
