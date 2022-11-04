import React, { useEffect, useState } from 'react'
import { Pagination } from '@mui/material'
import { Box, Typography, Stack } from '@mui/material'

import {exerciseOptions, fetchData} from '../utilities/fetchData'
import CardsExercises from './CardsExercises'

const Exercises = ({ exercises, setExercises, bodyPart }) => {

    const [currentPage, setcurrentPage] = useState(1)
    const exPerPage = 9;

    const lastIndexEx = currentPage * exPerPage;
    const firstIndexEx = lastIndexEx - exPerPage;
    const currentEx = exercises.slice(firstIndexEx, lastIndexEx);

    const paginate = (e, value) => {

      setcurrentPage(value);
      window.scrollTo( { top: 1800, behavior: 'smooth' } );

    }

    useEffect( () => {
     
      const fetchExerciseData = async () => {
        
        let exerciseData = [];

        if (bodyPart === 'all') {
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } 
        else {
          exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercises(exerciseData);

      }

      fetchExerciseData();

    }, [bodyPart])

  return (

    <Box id='exercises'
      sx={{ mt: {lg: '5rem'} }}
      mt='3rem'
      p='1rem'
    >

      <Typography variant='h3' mb='2rem' textAlign='center' color='#0B032D'>Results</Typography>

      <Stack 
        direction='row'
        sx={{ gap: {lg: '5rem', xs: '2rem'} }}
        flexWrap='wrap'
        justifyContent='center'
      >

        {currentEx.map( (exercise, index) => (
            <CardsExercises key={index} exercise={exercise} />
        ) )}

      </Stack>

      <Stack mt='5rem' alignItems='center'>

          {exercises.length > 9 && (
              <Pagination 
                color='standard'
                shape='rounded'
                defaultPage={1}
                count={Math.ceil(exercises.length / exPerPage)}

                page={currentPage}
                onChange={paginate}
                size='large'
              />
          )}

      </Stack>

    </Box>

  )
}

export default Exercises