import React from 'react'

import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/logo.png'

const Navbar = () => {
  return (

    <Stack direction='row' justifyContent='space-between' backgroundColor='#F8F9F9' boxShadow='10px 10px 8px #888888;' sx={{gap: {sm: '2rem', xs: '1rem'}, mt: {sm: '0rem', xs: '0rem'}, py: {sm: '1rem', xs: '1.2rem'}, justifyContent: 'none'}} >

      <Link to='/'>
        <img src={Logo} alt='logo' style={{width: '3rem', height: '3rem', margin: '0 1rem'}} />
      </Link>

      <Stack direction='row' gap='2rem' alignItems='flex-end' fontSize='1.2rem'>
        <Link to='/' style={{textDecoration: 'none',  color: '#0B3954'}}>Home</Link>
        <a href='#exercises' style={{textDecoration: 'none', color: '#0B3954'}}>Exercises</a>
      </Stack>

    </Stack>

  )
}

export default Navbar
