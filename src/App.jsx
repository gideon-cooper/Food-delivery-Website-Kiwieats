import React, { useEffect } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Browse from './components/Browse'
import Cart from './components/Cart'
import Success from './components/Success'
import Checkout from './components/Checkout'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.scss'
const App = () => (
  <Router>
    <Nav />
    <Route exact path='/' component={Home} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />
    <Route exact path='/checkout' component={Checkout} />
    <Route exact path='/cart' component={Cart} />
    <Route exact path='/browse' component={Browse} />
    <Route exact path='/success' component={Success} />
  </Router>
)
export default App
