import React, { useEffect, useState, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
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
    margin: 'auto',
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
    width: '100%',
  },
  cart: {
    display: 'flex',
    ['@media (max-width:500px)']: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    },

    width: '90%',
  },
  left: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flex: '2',
    ['@media (min-width: 501px) and (max-width:1024px)']: {
      flex: '1',
    },
  },
  right: {
    display: 'flex',
    height: '50vh',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1',
  },
  bottomRight: {
    width: '100%',
  },
})

export default function Cart() {
  const [cart, setCart] = useContext(CartContext)
  const handleClick = () => {
    setCart([])
  }
  const classes = useStyles()
  return (
    <>
      {cart.length === 0 ? (
        <Container className={classes.container} maxWidth="sm">
          <Typography className={classes.title} variant="h3">
            Your cart is empty
          </Typography>
          <Link to="/browse">
            <Button>Browse</Button>
          </Link>
        </Container>
      ) : (
        <>
          <Container className={classes.cart} maxWidth="lg">
            <div className={classes.left}>
              {cart.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>
            <Card className={classes.right}>
              <Typography className={classes.title} variant="h4">
                Checkout
              </Typography>
              <div className={classes.bottomRight}>
                <Typography variant="h5">
                  Total:$
                  {cart.map((item) => item.price).reduce((x, y) => x + y)}
                </Typography>
                <Link
                  onClick={handleClick}
                  className={classes.link}
                  to="checkout"
                >
                  <Button className={classes.button}>Checkout</Button>
                </Link>
              </div>
            </Card>
          </Container>
        </>
      )}
    </>
  )
}
