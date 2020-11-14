/* eslint-disable react/jsx-filename-extension */
import axios from 'axios'
import React, { useState, useEffect } from 'react'
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
  const [user, setUser] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [active, setActive] = useState({})

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
        setErrMsg(`${err}`)
      }
    }
    getStatus()
  }, [])

  return (
    <>
      <NavBar user={user} />
      {errMsg !== '' ? (
        <Alert variant="danger" onClose={() => setErrMsg('')} dismissible>
          {errMsg}
        </Alert>
      )
        : null}
      <HomeWrapper>
        <Questions setErrMsg={setErrMsg} setActive={setActive} />
        <DisplayQuestion question={active} />
      </HomeWrapper>
    </>
  )
}

export default Home
