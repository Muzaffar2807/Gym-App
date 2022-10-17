import React from 'react';
import { Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '130px', xs:'70px' },
        ml: { sm: '50px' }
    }} position="relative" p="20px">
        <Typography color="#FF2625" fontWeight="600" fontSize="26px">
            Fitness Club
        </Typography>

        <Typography fontWeight={700} 
            sx={{ fontSize: {lg: '44px', xs: " 40px"} }}
            mb="15px" mt="18px"
        >
            Sweat, Smile <br/> and Repeat 
        </Typography>

        <Typography
            fontSize="22px"
            lineHeight="35px"
            my={2}
        >
            Cheackout the most effective excercises
        </Typography>

        <Button href='#excercises'
            variant='contained'
            color='error'
            sx={{
                 backgroundColor: '#ff2625',
                 padding: '15px'
            }}
        >
            Explore Excercises
            </Button>

            <Typography
                fontWeight={700}
                color='#ff2625'
                sx={{
                    opacity:0.1,
                    display: { lg: 'block', xs: 'none'}
                }}
                fontSize="200px"
                mt="-50px"
            >
                Excercise
            </Typography>

            <img src={HeroBannerImage} alt="Banner-Image" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner