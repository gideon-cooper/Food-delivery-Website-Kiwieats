import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { getFood } from '../api'
import FoodItem from './FoodItem'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  browse: {
    display: 'flex',
  },
}))
export default function Browse() {
  const classes = useStyles()
  const [foods, setFoods] = useState([])

  useEffect(() => {
    getFood()
      .then((res) => {
        setFoods(res)
      })
      .catch((error) => {
        console.log('HOME API ERROR', error)
      })
  }, [])
  return (
    <Container className={classes.browse}>
      {foods.map((food) => (
        <FoodItem food={food} key={food.id} />
      ))}
    </Container>
  )
}
