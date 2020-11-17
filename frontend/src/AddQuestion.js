/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react'
import axios from 'axios'
import s from 'styled-components'
import { Modal, Form } from 'react-bootstrap'

const Button = s.button`
  width: 100%;
  border: none;
  padding: 17px 32px;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #E1306C, #FD1D1D);
  opacity: ${props => (props.disable ? 0.5 : 1)};

  :hover:enabled {
    transform: scale(1.02);
  }

  :disabled:hover {
    cursor: not-allowed;
  }
`

const AddQuestion = props => {
  const { setErrMsg, ...rest } = props
  const [text, setText] = useState('')

  const addQuestion = async () => {
    try {
      await axios.post('/api/questions/add', { questionText: text })
    } catch (err) {
      props.setErrMsg(`${err}`)
    }
  }

  return (
    <Modal
      {...rest}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      styled={{ borderRadius: '10px' }}
    >
      <Modal.Body>
        <Form.Group controlId="formBasicText">
          <Form.Label>Add Question</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Type new question"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Form.Group>
        <Button
          style={{ marginTop: '1rem' }}
          onClick={() => {
            addQuestion()
            setText('')
            props.onHide()
          }}
          disabled={text === ''}
          disable={text === ''}
        >
          Submit Question
        </Button>
        <Button
          style={{ marginTop: '1rem' }}
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Body>
    </Modal>
  )
}

export default AddQuestion
