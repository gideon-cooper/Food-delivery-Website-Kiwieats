import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem'
export default function Cart() {
  const [cart, setCart] = useContext(CartContext)
    
  return (
    <Container>
      {cart.map((item) => (
        <CartItem item={item} key={item.id} />
      ))}
    </Container>
  )
}
