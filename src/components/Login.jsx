import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import { loginUser } from '../api'
import TextField from '@material-ui/core/TextField'
import { Link, Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { UserContext } from '../Context/UserContext'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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

export default function Login(props) {
  const [user, setUser] = useContext(UserContext)
  const classes = useStyles()
  const [form, setForm] = useState({
    email: '',
  })
  const handleClick = () => {
    loginUser(form).then((res) => {
      setUser(res.user)
      localStorage.setItem('authToken', res.token)
      props.history.push('/')
      window.location.reload()
    })
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      email: e.target.value,
    })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>

        <TextField
          variant="outlined"
          margin="normal"
          onChange={handleChange}
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          onClick={handleClick}
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Login
        </Button>
        <Grid container>
          <Grid item>
            <Link to="/register" variant="body2">
              Don't have an account? Register
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}
