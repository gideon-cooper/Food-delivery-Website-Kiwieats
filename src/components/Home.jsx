import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  home: {
    display: 'flex',
    minHeight: '80vh',
    alignItems: 'center',
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <Container className={classes.home}>
      <div className={classes.color1}>
        <Typography>Get Food</Typography>
        <Typography>Delivered now</Typography>
        <Button color="primary">Order now</Button>
      </div>
      <div className={classes.color2}></div>
    </Container>
  )
}
