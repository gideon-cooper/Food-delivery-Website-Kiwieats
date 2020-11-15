import React from 'react'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles } from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'green',

    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: '#3FC060',
    },
  },
}))
export default function Checkout() {
  const classes = useStyles()
  return (
    <Container component='main' maxWidth='xs'>
      <Typography variant='h6' gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardName'
            label='Name on card'
            fullWidth
            autoComplete='cc-name'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cardNumber'
            label='Card number'
            fullWidth
            autoComplete='cc-number'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='expDate'
            label='Expiry date'
            fullWidth
            autoComplete='cc-exp'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id='cvv'
            label='CVV'
            helperText='Last three digits on signature strip'
            fullWidth
            autoComplete='cc-csc'
          />
        </Grid>
        <Grid item xs={12}>
          {/* <FormControlLabel
            control={<Checkbox color='secondary' name='saveCard' value='yes' />}
            label='Remember credit card details for next time'
          /> */}
          <Link to='/success'>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Checkout
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  )
}
