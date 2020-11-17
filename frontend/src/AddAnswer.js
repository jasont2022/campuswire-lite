/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import axios from 'axios'
import { Form } from 'react-bootstrap'
import s from 'styled-components'

const Button = s.button`
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

const AddAnswer = ({ setErrMsg, id }) => {
  const [answer, setAnswer] = useState('')

  const addAnswer = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/questions/answer', { _id: id, answer })
    } catch (err) {
      setErrMsg(`${err}`)
    }
  }

  return (
    <Form style={{ marginTop: '1.5em' }}>
      <Form.Group controlId="formBasicAnswer">
        <Form.Label>Answer this question:</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Type Answer"
          value={answer}
          onChange={e => setAnswer(e.target.value)}
        />
      </Form.Group>
      <Button
        style={{ margin: '1rem 0' }}
        onClick={e => {
          addAnswer(e)
          setAnswer('')
        }}
        disabled={answer === '' || id === undefined}
        disable={answer === '' || id === undefined}
      >
        Submit Answer
      </Button>
    </Form>
  )
}

export default AddAnswer
