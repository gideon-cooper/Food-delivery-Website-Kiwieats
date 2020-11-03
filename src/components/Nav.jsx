import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import { CartContext } from '../Context/CartContext'
const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: 'whitesmoke',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    color: 'black',
    flexGrow: 1,
  },
  button: {
    marginLeft: '3rem',
  },
  cartLength: {
    color: 'black',
    marginRight: theme.spacing(2),
  },
}))

export default function Nav(props) {
  const classes = useStyles()
  const [user, setUser] = useContext(UserContext)
  const [cart, setCart] = useContext(CartContext)
  const handleClick = () => {
    localStorage.removeItem('authToken')
    setUser({ name: '', email: '', id: '' })
    window.location.reload()
  }
  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position='sticky'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            <Link to='/'>
              Kiwi<span style={{ color: 'green' }}>Eats</span>
            </Link>
          </Typography>
          {localStorage.getItem('authToken') ? (
            <>
              <Link
                to='/cart'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h5' className={classes.cartLength}>
                  {cart.length}
                </Typography>
                <i
                  className='fas fa-shopping-cart'
                  style={{ color: 'green', fontSize: '1.5rem' }}
                ></i>
              </Link>
              <Button className={classes.button} onClick={handleClick}>
                Log off
              </Button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <Button color='black'>Login</Button>
              </Link>
              <Link to='/register'>
                <Button color='black'>Register</Button>
              </Link>{' '}
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
