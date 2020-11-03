import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AddToCart from './AddToCart'
import { CartContext } from '../Context/CartContext'

const useStyles = makeStyles({
  root: {
    width: 345,
    maxWidth: 345,
    marginRight: '4rem',
    marginTop: '2rem',
  },
  media: {
    height: 140,
  },
  lower: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  inCart: {
    marginLeft: '0.7rem',
  },
})

export default function FoodItem(props) {
  const classes = useStyles()
  const [cart, setCart] = useContext(CartContext)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.food.image} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.food.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.food.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.lower}>
        {!cart.find((item) => item.name === props.food.name) ? (
          <AddToCart food={props.food} />
        ) : (
          <Typography variant='h6' className={classes.inCart}>
            Added to cart
          </Typography>
        )}

        <p>${props.food.price}</p>
      </CardActions>
    </Card>
  )
}
