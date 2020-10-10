import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
}))

export default function Nav() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar className={classes.color} position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Kiwi<span style={{ color: 'green' }}>Eats</span>
          </Typography>
          <Button color="black">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}
