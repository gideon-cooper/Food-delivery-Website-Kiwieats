import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import { Link } from 'react-router-dom'
import { registerUser } from '../api'
import Grid from '@material-ui/core/Grid'
import { FormControl } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: 'green',
    color: 'whitesmoke',
    '&:hover': {
      backgroundColor: '#3FC060',
    },
  },
}))

export default function SignUp(props) {
  const classes = useStyles()
  const [form, setForm] = useState({
    name: '',
    password: '',
    email: '',
  })
  const handleClick = (event) => {
    event.preventDefault()
    registerUser(form).then(() => {
      return props.history.push('/')
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }
  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Register
        </Typography>
        <form onSubmit={handleClick}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='name'
                variant='outlined'
                onChange={handleChange}
                required
                fullWidth
                id='firstName'
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                onChange={handleChange}
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                type='email'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                onChange={handleChange}
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
            </Grid>
          </Grid>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Register
          </Button>
        </form>
        <Grid container justify='flex-end'>
          <Grid item>
            <Link to='/login' variant='body2'>
              Already have an account? Login
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
