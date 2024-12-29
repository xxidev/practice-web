import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const Footer: React.FC = () => {
  return (
    <Box
      component='footer'
      sx={{
        backgroundColor: '#F6F6F6',
        padding: 4,
        textAlign: 'center'
      }}
    >
      <Grid container spacing={4}>
        {/* Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h4'>QUICK LINKS</Typography>
          <Box sx={{ mt: 2 }}>
            <Link href='/locations' underline='hover' color='inherit'>
              Locations
            </Link>
            <br />
            <Link href='/careers' underline='hover' color='inherit'>
              Careers
            </Link>
            <br />
            <Link href='/faq' underline='hover' color='inherit'>
              FAQ
            </Link>
            <br />
            <Link href='/contact-us' underline='hover' color='inherit'>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* About Us */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h4'>ABOUT US</Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            Not your average hobby store! Panda Hobby is the largest hobby shop
            in Canada with a focus on Gundam and Japanese model kits.
          </Typography>
        </Grid>

        {/* Contact Us */}
        <Grid item xs={12} sm={4}>
          <Typography variant='h4'>CONTACT US</Typography>
          <Typography variant='body1' sx={{ mt: 2 }}>
            Markham Address: <br />
            140 Amber St. Unit 8, Markham, ON, L3R 3J8
            <br />
            Hours: Mon-Sat: 12:00 to 7:00pm
          </Typography>
        </Grid>
      </Grid>

      {/* Social Links */}
      <Box sx={{ mt: 4 }}>
        <Typography variant='body2'>Follow us</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
          <Link href='/facebook'>Facebook</Link>
          <Link href='/instagram'>Instagram</Link>
          <Link href='/twitter'>Twitter</Link>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer
