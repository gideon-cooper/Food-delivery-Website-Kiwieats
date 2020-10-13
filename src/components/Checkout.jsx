import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
const useStyles = makeStyles({
  title: {
    textAlign: 'center',
  },
})
export default function Checkout() {
  const classes = useStyles()
  return (
    <Container>
      <Typography className={classes.title} variant="h4">
        Thank you, your items are now on their way
      </Typography>
    </Container>
  )
}
