import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

const Header: React.FC = () => {
  return (
    <AppBar position='static' color='primary'>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo */}
        <img
          src='https://pandahobby.ca/cdn/shop/files/panda-logo-with-flag_158x60.jpg?v=1704743586'
          alt='Panda Hobby Logo'
          style={{ height: '60px', marginRight: '16px' }}
        />
        <Typography variant='h1' sx={{ fontSize: '24px' }}>
          Panda Hobby
        </Typography>

        {/* Search Bar */}
        <Box
          sx={{
            display: 'flex',
            backgroundColor: 'white',
            borderRadius: 2,
            padding: '0 10px',
            alignItems: 'center',
            width: '40%'
          }}
        >
          <InputBase
            placeholder='What are you looking for?'
            sx={{ flex: 1, ml: 1 }}
          />
        </Box>

        {/* Icons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <IconButton color='inherit'>
            <AccountCircleIcon />
          </IconButton>
          <IconButton color='inherit'>
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton color='inherit'>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
