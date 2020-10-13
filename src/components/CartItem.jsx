import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CartContext } from '../Context/CartContext'
import AddToCart from './AddToCart'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  button: {
    backgroundColor: 'red',

    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: '#ff4d4d',
    },
  },
  media: {
    height: 140,
  },
})

export default function CartItem(props) {
  const [cart, setCart] = useContext(CartContext)
  console.log(props.item.id, 'A')
  const classes = useStyles()
  let cartItem = props.food
  const removeCartItem = () => {
    return setCart(cart.filter((item) => item._id !== props.item._id))
  }
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={removeCartItem}
          className={classes.button}
          variant="contained"
        >
          remove
        </Button>
      </CardActions>
    </Card>
  )
}
