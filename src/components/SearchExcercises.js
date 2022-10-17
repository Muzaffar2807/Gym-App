import React, { useEffect, useState} from 'react';
import { Box, Typography, Stack, Button, TextField, } from '@mui/material';
import { excerciseOptions, fetchData} from '../utils/fetchData';

import HorizontalScrollBar from './HorizontalScrollBar';


const SearchExcercises = ({ setExercises, bodyPart, setBodyPart }) => {

  const [search, setSearch] = useState('');

 

  const [bodyParts, setBodyParts] = useState()

  useEffect(() => {
    const fetchExcercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }

    fetchExcercisesData();
  }, [])
  

  const handleSearch = async () => {

    if(search){
      const excerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', excerciseOptions);

      const searchedExcercises = excerciseData.filter(
        (excercise) => excercise.name.toLowerCase().includes(search)
        || excercise.target.toLowerCase().includes(search)
        || excercise.equipment.toLowerCase().includes(search)
        || excercise.bodyPart.toLowerCase().includes(search)
      )
      
      setSearch('')
      setExercises(searchedExcercises)
    
    }

  }

  return (
    <Stack 
      alignItems="center" mt="37px"  justifyContent="center" p="20px"
      sx={{
        width: {lg: '1400px', xs:'500px'}
      }} 
      >
    <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
      Awesome Exercises You <br /> Should Know
    </Typography>

    <Box position='relative' mb="72px">
      <TextField
        sx={{
          input: { 
            fontWeight: '700', border:'none',
            borderRadius: '4px'
          },
          width: { lg: '800px', xs: '350px'},
          backgroundColor: '#FFF',
          borderRadius: '40px'
        }}
        height="76px"

        value={search}
        onChange={(e) => {setSearch(e.target.value.toLocaleLowerCase())}}


        placeholder="Search Excercises"
        type='text'
      />
       
      <Button className='search-btn'  
        sx={{
          bgcolor: '#FF2625',
          color: '#FFF', 
          textTransform: 'none',
          width: { lg: '155px', xs: '40px'},
          fontSize: { lg: '18px', xs: '14px'},
          height: '56px',
          position: "absolute",
          right: '0'
        }}

        onClick={handleSearch}
      >
        Search
      </Button>
    </Box>



    <Box sx={{ position: 'relative', width: '100%' , p : '20px' }}>
      <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart }/> 
    </Box>

    </Stack>
  )
}

export default SearchExcercises