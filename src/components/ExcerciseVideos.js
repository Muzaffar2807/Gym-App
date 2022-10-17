import React from 'react';
import { Box, Stack, Typography} from '@mui/material';
import Loader from './Loader';




const ExcerciseVideos = ({ exerciseVideos, name }) => {

  
  
  if(!exerciseVideos.length) return <Loader/>

  return (
    <Box
      sx={{
        marginTop: { lg: '200px', xs: '20px'},
        p: '20px'
      }}
    >
      <Typography variant='h3' mb='33px' width="1000px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"  width="1400px"
        sx={{
          flexDirection : { lg: 'row' },
          gap : { lg: '90px', xs: '0'}
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item,index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https:www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blanck'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h5' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#ccc'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExcerciseVideos