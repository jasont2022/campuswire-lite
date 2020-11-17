/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import s from 'styled-components'
import { Alert } from 'react-bootstrap'
import NavBar from './NavBar'
import Questions from './Questions'
import DisplayQuestion from './DisplayQuestion'

const HomeWrapper = s.div`
  display: flex;
  flex-direction: row;
`

const Home = () => {
  const history = useHistory()
  const [user, setUser] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [active, setActive] = useState({})
  const [count, setCount] = useState(0) // to trigger the useEffect

  // error with setErrMsg for Modal Component (AddQuestion)
  // have to click on a question to update the answer and also did not fetch questions on home
  // component
  useEffect(() => {
    const getStatus = async () => {
      try {
        const res = await axios.post('/isAuthenticated')
        const { data: { username } } = res
        console.log(res)
        console.log(username)
        setUser(username)
      } catch (err) {
        console.log(err)
        setUser('')
        history.push('/')
        // setErrMsg(`${err}`)
      }
    }
    getStatus()
  }, [count])

  return (
    <>
      <NavBar
        user={user}
        setErrMsg={setErrMsg}
        count={count}
        setCount={setCount}
      />
      {errMsg !== '' ? (
        <Alert variant="danger" onClose={() => setErrMsg('')} dismissible>
          {errMsg}
        </Alert>
      )
        : null}
      <HomeWrapper>
        <Questions user={user} setErrMsg={setErrMsg} setActive={setActive} />
        <DisplayQuestion user={user} setErrMsg={setErrMsg} question={active} />
      </HomeWrapper>
    </>
  )
}

export default Home
