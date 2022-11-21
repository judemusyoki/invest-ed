import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Avatar, Typography } from '@mui/material'

import { CardFooter } from './cardFooter'
import { Card as CardType } from '../data/cardData'

type CardProps = {
  cardItem: CardType
}

export const Card: FC<CardProps> = ({ cardItem }): JSX.Element => {
  const {
    title,
    author,
    lessons,
    hours,
    likes,
    progress,
    coverImage,
    authorAvatar,
  } = cardItem

  return (
    <Box sx={cardContainer}>
      <Box sx={imageContainer}>
        {progress !== 0 && (
          <Box sx={percentageContainer}>{progress}% completed</Box>
        )}
        <img
          src={coverImage}
          loading="lazy"
          width="100%"
          height="100%"
          className="image"
        />
      </Box>
      <Box sx={infoContainer}>
        <Box>
          <Typography sx={titleContainer} variant="h5" noWrap>
            {title}
          </Typography>
        </Box>
        <Box sx={authorContainer}>
          <Avatar alt={author} src={authorAvatar} />
          <Typography sx={authorContent}>{author}</Typography>
        </Box>
        <CardFooter lessons={lessons} hours={hours} likes={likes} />
      </Box>
    </Box>
  )
}

const cardContainer = {
  border: '2px solid #000',
  zIndex: 0,
  display: 'flex',
  flexDirection: 'column',
  width: 400,
  height: 400,
  '&:hover': {
    backgroundColor: '#1976D2',
    opacity: [0.9, 0.8, 0.7],
  },
  position: 'relative',
}

const imageContainer = {
  display: 'flex',
  flexDirection: 'flex-end',
  borderBottom: '1px solid #000',
  width: '100%',
  height: '66.6%',
  justifyItems: 'center',
  '&:hover': {
    backgroundColor: '#1976D2',
    opacity: [0.9, 0.8, 0.7],
  },
}
const percentageContainer = {
  marginTop: 2,
  marginLeft: 1,
  right: 10,
  padding: 0.5,
  paddingBottom: 0,
  position: 'absolute',
  borderRadius: 2,
  backgroundColor: '#1976D2',
  color: '#fff',
  width: 'fit',
  height: 30,
  zIndex: 40,
}

const infoContainer = {
  height: '33.3%',
  padding: 0.5,
  paddingLeft: 2,
  alignItems: 'center',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
}

const titleContainer = {
  width: '70%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  marginTop: 1,
}

const authorContainer = {
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '5px',
}

const authorContent = {
  paddingTop: 0,
  paddingBottom: 0,
  margin: 'auto 0',
  width: '70%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}
