// eslint-disable-next-line react-hooks/exhaustive-deps



import React, { useEffect, useState  } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';

import ExerciseCard from './ExerciseCard';




// Use forwardRef to expose the Box element to parent
const Exercises = ({ exercises, setExercises, bodyPart }) => {

    //console.log("Exercises updated:", exercises);


    const [currentPage, setCurrentPage] = useState(1);
    // const [exercisesPerPage] = useState(6);
    const exercisesPerPage = 6;



    useEffect(() => {
      const fetchExercises = async () => {
        let exercisesData = [];

        if (bodyPart === "all") {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
        }

        setExercises(exercisesData);
      };

      fetchExercises();
    }, [bodyPart, setExercises]);


    // Pagination logic
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (event, value) => {
      setCurrentPage(value);
      window.scrollTo({ top: 1800, behavior: 'smooth' });
    };


    return (
      <Box id="exercises" sx={{ mt: { lg: '112px' } }} mt="50px" p="20px">

        <Typography variant="h3" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
          Showing Results
        </Typography>

        <Stack direction="row" flexWrap="wrap" justifyContent="center" sx={{ gap: { lg: '107px', xs: '50px' } }}>
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={exercise.id} id={exercise.id} exercise={exercise} />
          ))}
        </Stack>

        <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length > exercisesPerPage && (
              <Pagination
                color="standard"
                shape="rounded"
                defaultPage={1}
                count={Math.ceil(exercises.length / exercisesPerPage)}
                page={currentPage}
                onChange={paginate}   // but behind the scene material UI passes like: {(e) => paginate(e, value)}
                size="large"
              />

          )}
        </Stack>

      </Box>  
    );

};

export default Exercises;