import { Button, Typography, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const CardsExercises = ({ exercise }) => {
  return (

    <Link to={`/exercise/${exercise.id}`} className='exercise-card'>

        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

        <Stack direction='row'>

            <Button sx={{ ml: '1rem', backgroundColor: '#DEC4A1', color: '#0B032D', fontSize: '1rem', borderRadius: '.5rem', textTransform: 'capitalize', }}>
                {exercise.bodyPart}
            </Button>

            <Button sx={{ ml: '1rem', backgroundColor: '#A33B20', color: '#0B032D', fontSize: '1rem', borderRadius: '.5rem', textTransform: 'capitalize', }}>
                {exercise.target}
            </Button>

        </Stack>

        <Typography ml='1rem' color='#0B032D' textTransform='capitalize' fontWeight='700' fontSize='1.1rem' pb='1rem'>
            {exercise.name}
        </Typography>

    </Link>

  )
}

export default CardsExercises