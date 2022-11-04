import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ScrollbarHorizontal from './ScrollBarHorizontal'
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {

  return (

    <Box sx={{ mt: {lg: '5rem', xs: '0'} }}>

      <Typography variant='h4' color='#0B032D' fontWeight='600' m='2rem 0' textAlign='center'>Select exercises with the same muscle group</Typography>

      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>

          {targetMuscleExercises.length ? <ScrollbarHorizontal data={targetMuscleExercises} /> : <Loader /> }

      </Stack>


      <Typography variant='h4' color='#0B032D' fontWeight='600' m='2rem 0' textAlign='center'>Select exercises with the same equipment</Typography>

      <Stack direction='row' sx={{ p: '2', position: 'relative' }}>

          {equipmentExercises.length ? <ScrollbarHorizontal data={equipmentExercises} /> : <Loader /> }

      </Stack>

    </Box>

  )
}

export default SimilarExercises