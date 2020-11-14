/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import s from 'styled-components'

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
`

const Question = s.div`
  padding: 1rem;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0px;
  margin-top: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;

  :hover {
    cursor: pointer;
  }
`

const Questions = ({ setErrMsg, setActive }) => {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get('/api/questions')
        setQuestions(data)
        console.log(data)
      } catch (err) {
        console.log(err)
        setErrMsg(`${err}`)
      }
    }
    fetchQuestions()
  }, [])

  return (
    <QuestionsWrapper>
      <Link to="/login"><Button>Log in to submit a question</Button></Link>
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
