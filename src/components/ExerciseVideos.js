import { Box, Stack, Typography } from '@mui/material'
import React from 'react'



const ExerciseVideos = ({exerciseVideos, name}) => {
  console.log(exerciseVideos)

  if (!exerciseVideos.length) return 'Loading';

  return (

    <Box sx={{ marginTop: {lg: '10rem', xs: '1rem'}  }} p='1rem' >

      <Typography variant='h3' mb='2rem' textAlign='center' fontWeight='500'>
        Watch the <span style={{color: '#5C7457', fontWeight: '700', textTransform: 'capitalize'}}>{name}</span> exercises
      </Typography>

      <Stack 
        justifyContent='center' 
        flexWrap='wrap' 
        alignItems='center'
        sx={{ 
          flexDirection: {lg: 'row'},
          gap: {lg: '4rem', xs: '0'}
        }}
        >

          {exerciseVideos?.slice(0, 6).map( (item, index) => (
            
            <a 
              key={index}
              className='exercise-video'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target='_blank'
              rel='noreferrer'
            >

              <img src={item.video.thumbnails[0].url} alt={item.video.title} sx={{borderRadius: '.5rem' }} />

              <Box>
                <Typography fontSize='1.1rem' color='#0B032D' fontWeight='600' ml='1rem'>
                  {item.video.title}
                </Typography>

                <Typography color='#6320EE' fontWeight='600' ml='1rem'>
                  {item.video.channelName}
                </Typography>
              </Box>

            </a>

          )) }

      </Stack>

    </Box>

  )
}

export default ExerciseVideos