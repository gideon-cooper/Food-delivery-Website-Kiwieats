import React from 'react'
import ReactDOM from 'react-dom'
import { UserProvider } from './Context/UserContext'
import { CartProvider } from './Context/CartContext'
import App from './App'

ReactDOM.render(
  <CartProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </CartProvider>,
  document.querySelector('#root')
)
