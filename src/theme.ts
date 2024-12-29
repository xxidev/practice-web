import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#8CC63E'
    },
    secondary: {
      main: '#6D6E70'
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          color: '#8CC63E',
          fontWeight: 700,
          fontFamily: 'Playfair Display SC',
          fontSize: '24px',
          lineHeight: '36px',
          letterSpacing: '0.2em',
          textAlign: 'center',
          textTransform: 'uppercase'
        },
        h2: {
          fontFamily: 'Inter',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '36px',
          textAlign: 'left'
        },
        h3: {
          fontFamily: 'Inter',
          fontSize: '20px',
          fontWeight: 600,
          lineHeight: '32px',
          textAlign: 'left'
        },
        h4: {
          fontFamily: 'Inter',
          fontSize: '18px',
          fontWeight: 500,
          lineHeight: '24px',
          textAlign: 'left'
        },
        body1: {
          fontFamily: 'Inter',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
          textAlign: 'left'
        },
        body2: {
          fontFamily: 'Inter',
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: '21px',
          textAlign: 'left'
        },
        caption: {
          fontFamily: 'Inter',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '1.5',
          color: '#d32f2f',
          marginLeft: '14px',
          marginRight: '14px'
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '16px',
          textAlign: 'left',
          padding: '8px'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})

export default theme
