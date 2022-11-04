import React, {useState} from 'react'
import { Box } from '@mui/material'

import Main from '../components/Main'
import Search from '../components/Search'
import Exercises from '../components/Exercises'

const Home = () => {

  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')


  return (

    <Box>
      <Main />
      <Search setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} bodyPart={bodyPart} exercises={exercises} />
    </Box>

  )
}

export default Home