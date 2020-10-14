import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    minHeight: '80vh',
    width: '90%',
    alignItems: 'center',
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
    ['@media (max-width:1024px)']: {
      display: 'none',
    },
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Container className={classes.home}>
      <div className={classes.left}>
        <Typography variant="h2">Get Food</Typography>
        <Typography className={classes.title} variant="h2">
          Delivered now
        </Typography>
        <Link to="/browse">
          <Button className={classes.button} variant="contained">
            Order now
          </Button>
        </Link>
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
