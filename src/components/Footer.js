import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import FooterLogo from '../assets/footer-logo.png'

const Footer = () => {

  return (

    <Box mt='5rem' bgcolor='#F2F4FF' borderTop= '.1rem solid #0B032D'>

      <Stack px='2rem' pt='1rem' alignItems='center'>
          <img src={FooterLogo} alt='logo' width='30rem' height='30rem' />
          <Typography variant='h6' pb='1rem' mt='1rem' fontWeight='700'>Created By ©️ Kamil </Typography>
          
      </Stack>

    </Box>

  )
}

export default Footer