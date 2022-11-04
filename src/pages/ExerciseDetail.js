import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {exerciseOptions, fetchData, youtubeOptions} from '../utilities/fetchData'

import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams();

  const [exerciseVideos, setExerciseVideos] = useState([]);

  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  useEffect(() => {
          
      const fetchExercisesData = async () => {
        
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youtubeSearchDownloadUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

        setExerciseDetail(exerciseDetailData); 


        const exerciseVideosData = await fetchData(`${youtubeSearchDownloadUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);

        setExerciseVideos(exerciseVideosData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);

        const equipmentMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);

        setTargetMuscleExercises(targetMuscleExercisesData);
        setEquipmentExercises(equipmentMuscleExercisesData);
      }

    fetchExercisesData();

  }, [id])
  

  return (

    <Box>

      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos = {exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />

    </Box>

  )
}

export default ExerciseDetail