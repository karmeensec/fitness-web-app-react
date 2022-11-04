import React from 'react'
import {Stack, Typography} from '@mui/material'
import Icon from '../assets/icon.png'

const BodyPart = ({item, bodyPart, setBodyPart}) => {
  return (

    <Stack 
        type="button"
        alignItems='center'
        justifyContent='center'
        className='bodyPart-card'
        sx={{ 

          borderTop: bodyPart === item ? '.1rem solid #0B032D' : '',

          backgroundColor: '#E7DECD',
          width: '10rem',
          height: '10rem',
          borderRadius: '.5rem',
          borderBottomLeftRadius: '.9rem',
          cursor: 'pointer',
          gap: '2rem',

         }}

         onClick={ () => { setBodyPart(item); window.scrollTo( {top: 1800, left: 100, behavior: 'smooth'} ) } }
    >

        <img src={Icon} alt='dumbbell' style={{width: '3rem', height: '3rem'}} />

        <Typography fontSize='1.5rem' fontWeight='700' color='#0A122A' >{item}</Typography>

    </Stack>

  )
}

export default BodyPart