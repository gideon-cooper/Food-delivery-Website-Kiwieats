import React, { useEffect, useState } from 'react'
import { getFood } from '../api'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { StorefrontOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    minHeight: '80vh',
    width: '90%',
    alignItems: 'center',
    ['@media (max-width:1024px)']: {
      flexDirection: 'column',
    },
  },
  title: {
    color: 'green',
  },
  button: {
    backgroundColor: 'green',
    marginTop: '25px',
    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: '#3FC060',
    },
  },
  image: {
    height: '100%',
    width: '100%',
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 2,
    height: '70vh',
  },
}))

export default function Home() {
  const [food, setFood] = useState([])
  useEffect(() => {
    getFood()
      .then((res) => {
        setFood(res)
      })
      .catch((error) => {
        console.log('HOME API ERROR', error)
      })
  }, [])
  const classes = useStyles()
  return (
    <Container className={classes.home}>
      <div className={classes.left}>
        <Typography variant="h2">Get Food</Typography>
        <Typography className={classes.title} variant="h2">
          Delivered now
        </Typography>
        <Button className={classes.button} variant="contained">
          Order now
        </Button>
      </div>
      <div className={classes.right}>
        <img
          className={classes.image}
          src="https://img.deszone.net/2018/10/food-vector-free-icon-set2.jpg"
          alt=""
        />
      </div>
    </Container>
  )
}
