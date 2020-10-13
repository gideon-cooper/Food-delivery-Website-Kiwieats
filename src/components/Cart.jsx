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
    backgroundColor: 'green',
    width: '100%',
    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: '#3FC060',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  link: {
    width: '80%',
  },
})

export default function Cart() {
  const [cart, setCart] = useContext(CartContext)
  const classes = useStyles()
  return (
    <Container className={classes.container} maxWidth="sm">
      {cart.length === 0 ? (
        <>
          <Typography className={classes.title} variant="h3">
            Your cart is empty
          </Typography>
          <Link to="/browse">
            <Button>Browse</Button>
          </Link>
        </>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <Link className={classes.link} to="checkout">
            <Button className={classes.button}>Buy now</Button>
          </Link>
        </>
      )}
    </Container>
  )
}
