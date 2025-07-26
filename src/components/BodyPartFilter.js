import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import { fetchData, exerciseOptions } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const BodyPartFilter = ({ bodyPart, setBodyPart }) => {

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const bodyPartsData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
          exerciseOptions
        );
        setBodyParts(['all', ...bodyPartsData]);
      } catch (error) {
        console.error('Failed to fetch exercises:', error);
        setBodyParts([]);
      }
    };

    fetchExercisesData();
  }, []);

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center"
      >
        Explore Exercises by <br /> Body Part
      </Typography>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          bodyParts
        />
      </Box>
    </Stack>
  );
};

export default BodyPartFilter;
