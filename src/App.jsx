import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.scss'
const App = () => (
  <Router>
    <Nav />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Router>
)
export default App
