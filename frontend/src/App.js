/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom'
import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
)

export default App
