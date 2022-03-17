import React from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined'
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined'
import RecommendOutlinedIcon from '@mui/icons-material/RecommendOutlined'
import { Link } from 'react-router-dom'

export const Sidebar = (props) => {
  const { DrawerHeader, theme, drawerWidth, open, handleDrawerClose } = props

  const linkText = {
    color: 'black',
    textDecoration: 'none'
  }


  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 10,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <Link to="/topnews" style={linkText}>
            <ListItem>
              <ListItemIcon>
                <FeedOutlinedIcon />
              </ListItemIcon>
              <ListItemText>TOP NEWS</ListItemText>
            </ListItem>
          </Link>
          <Link to="/grid" style={linkText}>
            <ListItem>
              <ListItemIcon>
                <SplitscreenOutlinedIcon />
              </ListItemIcon>
              <ListItemText>GRID</ListItemText>
            </ListItem>
          </Link>
          <Link to="/recommend" style={linkText}>
            <ListItem>
              <ListItemIcon>
                <RecommendOutlinedIcon />
              </ListItemIcon>
              <ListItemText>RECOMMEND</ListItemText>
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
    </>
  )
}
