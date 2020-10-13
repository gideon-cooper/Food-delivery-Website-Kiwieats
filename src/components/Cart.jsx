import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import CartItem from './CartItem'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles({
  title: {
    marginTop: '2rem',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  button: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})

export default function Cart() {
  const [cart, setCart] = useContext(CartContext)
  const classes = useStyles()
  return (
    <Container>
      {cart.length === 0 ? (
        <Container className={classes.container}>
          <Typography className={classes.title} variant="h3">
            Your cart is empty
          </Typography>
          <Link to="/browse">
            <Button>Browse</Button>
          </Link>
        </Container>
      ) : (
        cart.map((item) => <CartItem item={item} key={item.id} />)
      )}
    </Container>
  )
}
