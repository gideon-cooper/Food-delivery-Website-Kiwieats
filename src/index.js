import React from 'react'
import ReactDOM from 'react-dom'
import { UserProvider } from './Context/UserContext'
import App from './App'

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.querySelector('#root')
)
