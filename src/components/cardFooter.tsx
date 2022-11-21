import React, { FC } from 'react'
import Box from '@mui/material/Box'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import { Typography } from '@mui/material'

type CardFooterProps = {
  lessons: number
  hours: number
  likes: number
}

export const CardFooter: FC<CardFooterProps> = ({
  lessons,
  hours,
  likes,
}): JSX.Element => {
  return (
    <Box sx={cardDetailsContainer}>
      <Box sx={lessonsContent}>
        <Typography gutterBottom variant="subtitle1">
          {lessons} Lessons
        </Typography>
      </Box>
      <Box sx={timeContainer}>
        <AccessTimeIcon />
        <Typography>{hours} hrs</Typography>
      </Box>
      <Box sx={likesContainer}>
        <Typography>{likes}</Typography>
        <ThumbUpIcon />
      </Box>
    </Box>
  )
}

const cardDetailsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: 2,
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
}

const lessonsContent = {}

const timeContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 66,
}

const likesContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: 60,
}
