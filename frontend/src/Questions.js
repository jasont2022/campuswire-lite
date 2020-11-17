/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import s from 'styled-components'
import AddQuestion from './AddQuestion'

const QuestionsWrapper = s.div`
  width: 40%;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
  height: 100%;
`

const Button = s.button`
  width: 100%;
  border: none;
  padding: 17px 32px;
  color: white;
  text-decoration: none;
  border-radius: 10px;
  background: linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #E1306C, #FD1D1D);

  :hover {
    transform: scale(1.02);
  }
`

const Question = s.div`
  padding: 1rem;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0px;
  margin-top: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`

const Questions = ({ user, setErrMsg, setActive }) => {
  const [questions, setQuestions] = useState([])
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get('/api/questions')
        setQuestions(data)
      } catch (err) {
        setErrMsg(`${err}`)
      }
    }
    const intervalID = setInterval(() => {
      fetchQuestions()
    }, 2000)
    // clean up function
    return () => clearInterval(intervalID)
  }, [])

  return (
    <QuestionsWrapper>
      {user === '' || user === null || user === undefined ? (
        <Link to="/login"><Button>Login to submit a question</Button></Link>
      ) : (
        <Button onClick={() => setModalShow(true)}>Add new question +</Button>
      )}
      <AddQuestion
        show={modalShow}
        onHide={() => setModalShow(false)}
        setErrMsg={setErrMsg}
      />
      {questions.map(question => (
        <Question
          key={question._id}
          onClick={() => setActive(question)}
        >
          {question.questionText}
        </Question>
      ))}
    </QuestionsWrapper>
  )
}

export default Questions
