import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import MainImg from '../assets/main5.png'

const Main = () => {
  return (

    <Box sx={{
        mt: {lg: '5rem', xs: '2rem'},
        ml: {sm: '1rem'}
    }} position='relative' p='1rem'>

        <Typography color='#0D1F2D' fontWeight='700' fontSize='2rem'>Fitness Center</Typography>
        <Typography fontWeight='800' sx={{ fontSize: {lg: '4rem', xs: '3rem'}}} mb='1rem' mt='1.5rem'>Sore Today, <br /> Strong Tomorrow!</Typography>
        <Typography fontSize='1.7rem' lineHeight='2' mb={2}>Start exercising today...</Typography>

        <Button variant = 'contained' color = 'secondary' href='#exercises' sx={{padding: '.5rem 1rem'}}>Explore More</Button>

        <Typography fontWeight='600' color='#F9AB55' fontSize='15rem' sx={{
            opacity: 0.5,
            display: {lg: 'block', xs: 'none'}
        }}>Exercises</Typography>
        <img src={MainImg} alt='banner' className='main-img'/>

    </Box>

  )
}

export default Main
