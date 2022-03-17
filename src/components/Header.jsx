import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export const Header = (props) => {
  const { AppBar, open, handleDrawerOpen } = props

  const headerText = {
    color: 'white',
    textDecoration: 'none',
  }

  return (
    <>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/" style={headerText}>
            <Typography variant="h6" >
              News
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  )
}
