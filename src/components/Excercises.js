import React, { useState, useEffect}from 'react';
import  Pagination  from '@mui/material/Pagination';
import { Box, Typography} from '@mui/material';
import Stack from '@mui/material/Stack'

import { excerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';


const Excercises = ({ exercises, setExercises, bodyPart}) => {

  const [currentPage, setCurrentPage] = useState(1);

  const exercisesPerPage = 9;  
  
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({ top: 1800 , behavior: 'smooth'})
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if(bodyPart === 'all'){
        exerciseData = await  fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);
      }else{
        exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, excerciseOptions);
      }
      setExercises(exerciseData)
    }
    fetchExercisesData();
  },[bodyPart])
 
  return (
    <Box 
      id='exercises'
      sx={{ mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Showing Results
      </Typography>

      <div className='fix-flex'> 
        {currentExercises.map((exercise, index ) => (
            <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </div>

      <div className='fix-pagination' >
        {exercises.length > 9 &&(
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / 9 )}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </div>
    </Box>
  )
}

export default Excercises