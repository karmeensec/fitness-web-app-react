import { Box, Typography } from '@mui/material'
import React, { useContext } from 'react'
import BodyPart from './BodyPart'

import { ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'


import leftArrowImage from '../assets/back.png'
import rightArrowImage from '../assets/next.png'

import CardExercises from './CardsExercises'

// Arrows-----------------

const LeftArrow = () => {

  const { scrollPrev } = useContext(VisibilityContext);

  return ( 

    <Typography onClick={ () => scrollPrev() } className='right-arrow' >

        {/* <img src={leftArrowImage} alt='left-arrow' /> */}

    </Typography>

  );

}


const RightArrow = () => {

  const {scrollNext} = useContext(VisibilityContext);

  return (

    <Typography onClick={ () => scrollNext() } className='left-arrow' >

        {/* <img src={rightArrowImage} alt='right-arrow' /> */}

    </Typography>

  )

}




const ScrollBarHorizontal = ( {data, bodyPart, setBodyPart, isBodyParts} ) => {
  return (

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >

        { data.map( (item) => (
        
        <Box 
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m='0 2rem'
            >
            
            { isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> : <CardExercises exercise={item} /> }   

        </Box> ) ) }

    </ScrollMenu>

  )
}

export default ScrollBarHorizontal