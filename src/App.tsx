import React from 'react'
import Header from './components/Header'
import LoginPage from './pages/login'
import Footer from './components/Footer'
import theme from './theme'
import { ThemeProvider } from '@mui/material'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <LoginPage />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
