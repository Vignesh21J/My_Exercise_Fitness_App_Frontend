import React, { useContext } from 'react'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';



const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};



const HorizontalScrollbar = ({data, bodyPart, setBodyPart, bodyParts }) => {

  return (

    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
                key={item.id || item}
                itemId={(item.id || item).toString()}
                title={item.id || item}
                m="0 40px"
            >
                {/* {item} } Chest, Shoulder, Leg, Waist, .... */}

                {/* <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> */}

                {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }

            </Box>
        ))}
    </ScrollMenu>

  )
}

export default HorizontalScrollbar