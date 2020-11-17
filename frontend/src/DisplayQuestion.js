/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import s from 'styled-components'
import AddAnswer from './AddAnswer'

const Wrapper = s.div`
  width: 60%;
  box-sizing: border-box;
  padding: 20px;
  margin: 0 auto;
`
const QuestionWrapper = s.div`
  padding: 1rem;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 0px;
  margin-top: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 8px;
`

const Question = ({ author, text, answer }) => (
  <QuestionWrapper>
    <h2>{text}</h2>
    <p>Author: {author}</p>
    <p>Answer: {answer}</p>
  </QuestionWrapper>
)

const DisplayQuestion = ({ user, setErrMsg, question }) => {
  const {
    _id, author, questionText, answer,
  } = question

  return (
    <Wrapper>
      <Question author={author} text={questionText} answer={answer} />
      {user === '' || user === null || user === undefined ? null : (
        <AddAnswer setErrMsg={setErrMsg} id={_id} />
      )}
    </Wrapper>
  )
}

export default DisplayQuestion
