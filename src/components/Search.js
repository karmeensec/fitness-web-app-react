import React from 'react'
import { useState, useEffect } from 'react'
import {Box, Button, Typography, Stack, TextField} from '@mui/material'

import { fetchData, exerciseOptions } from '../utilities/fetchData';

import ScrollBarHorizontal from './ScrollBarHorizontal';

const Search = ({bodyPart, setBodyPart, setExercises}) => {

  const [search, setSearch] = useState('');
  
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    
    const fetchExerciseData = async () => {

      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);

    }

    fetchExerciseData();

  }, [])
  

  const handleSearch = async () => {

    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchExercises = exerciseData.filter( (exercise ) => 
        exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      ) 

      setSearch('');
      setExercises(searchExercises);

    }

  }

  return (

    <Stack alignItems='center' justifyContent='center' mt='2rem' p='1rem'>

      <Typography fontWeight='700' sx={{fontSize: {lg: '3rem', xs: '2rem'} }} textAlign='center' mb='2rem' >Mindset is what separates the <br /> best from the rest!</Typography>

      <Box position='relative' mb='2rem'>

        <TextField 
          height='2rem'
          value={search}
          onChange={ (e) => setSearch(e.target.value.toLocaleLowerCase()) }
          type='text'
          placeholder='Search Exercises'
          sx={{ input: {
            fontWeight: '600', 
            border: '.1rem solid #0B032D', 
            borderRadius: '.5rem'},
          width: {
            lg: '50rem',
            xs: '15rem'
          },
          backgroundColor: '#EBF5EE',
          borderRadius: '1rem'
          }}
        />

        <Button className='search-btn'
        sx={{
          backgroundColor: '#843B62',
          color: '#EBF5EE',
          textTransform: 'none',
          width: {lg: '10rem', xs: '5rem'},
          fontSize: {lg: '1.2rem', xs: '.6rem'},
          position: "absolute",
          right: '0',
          height: '3.7rem',
          ml: '1rem',
          border: '.1rem solid #0B032D'
        }}
          
        onClick={handleSearch}
        >Search More</Button>

      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '1rem' }}>

        <ScrollBarHorizontal data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />

      </Box>

    </Stack>

  )
}

export default Search