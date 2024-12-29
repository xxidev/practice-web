import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

const LoginPage: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: 4 }}>
      {/* Title */}
      <Typography variant='h1' sx={{ mb: 4 }}>
        Login
      </Typography>

      {/* Login Form */}
      <Box
        component='form'
        sx={{
          maxWidth: 400,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 2
        }}
      >
        <TextField label='Email' variant='outlined' fullWidth />
        <TextField
          label='Password'
          type='password'
          variant='outlined'
          fullWidth
        />
        <Button
          variant='contained'
          color='primary'
          type='submit'
          sx={{ padding: 1, fontSize: '16px' }}
        >
          SIGN IN
        </Button>
      </Box>

      {/* Links */}
      <Box sx={{ mt: 3 }}>
        <Typography variant='body2'>
          New Customer?{' '}
          <Link href='/create-account' underline='hover'>
            Create account
          </Link>
        </Typography>
        <Typography variant='body2'>
          <Link href='/forgot-password' underline='hover'>
            Forgot your password?
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}

export default LoginPage
