import { Typography, Stack, Button } from '@mui/material'
import React from 'react'

import BodyPartImage from '../assets/abs.png'
import TargetImage from '../assets/calves.png'
import EquipmentImage from '../assets/biceps-dumbbell.png'

const Details = ({ exerciseDetail }) => {

  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail;

  const extraDetail = [

    {
      icon: BodyPartImage,
      name: bodyPart,
    },

    {
      icon: TargetImage,
      name: target,
    },

    {
      icon: EquipmentImage,
      name: equipment,
    },

  ]

  

  return (

    <Stack 
      gap='3rem'
      sx={{ flexDirection: {lg: 'row'}, p: '2rem', alignItems: 'center' }}
    >
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />  

      <Stack sx={{ gap: {lg: '2rem', xs: '1rem'} }}>

        <Typography variant='h3' fontWeight='700'>{name}</Typography>

        <Typography variant='h6'>

        There are more than enough essential exercises that anyone who gets in the gym should at least consider.
        {` `} {name} {` `} is one of the essential exercises to keep you strong and targets your {target}.

        </Typography>

        {extraDetail.map( (item) => (

            <Stack key={item.name} direction='row' gap='1.5rem' alignItems='center'>
              
                <Button sx={{ borderRadius: '3rem', backgroundColor: '#CAC4CE', width:'6rem', height:'6rem', borderTop: '.1rem solid #0B032D', borderBottom: '.3rem solid #0B032D' }}>
                  <img src={item.icon} width='40rem' height='40rem' alt={bodyPart} />
                </Button>

                <Typography variant='h5' textTransform='capitalize'>
                    {item.name}
                </Typography>

            </Stack>

        ) )}

      </Stack>

    </Stack>

  )
}

export default Details