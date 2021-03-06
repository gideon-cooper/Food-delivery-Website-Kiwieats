import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { CartContext } from '../Context/CartContext'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: 'green',

    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: '#3FC060',
    },
  },
}))

export default function AddToCart(props) {
  const history = useHistory()
  let cartItem = props.food
  console.log(props.food)
  const [cart, setCart] = useContext(CartContext)
  const updateCart = () => {
    console.log('BEING CLICKED', cartItem, cart)
    {
      localStorage.getItem('authToken')
        ? setCart([...cart, cartItem])
        : history.push('/login')
    }
  }
  const classes = useStyles()
  return (
    <Button onClick={updateCart} className={classes.button} variant='contained'>
      Add To Cart
    </Button>
  )
}
