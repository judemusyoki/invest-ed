import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
// import axios from 'axios'

import { Card } from './card'
import { cardData, Card as CardType } from '../data/cardData'

export const Feed: FC = (): JSX.Element => {
  // const [dataItems, setDataItems] = useState()
  // const [loading, setLoading] = useState(true)

  // Example of using Axios to query data from API
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
  //     .then((res) => {
  //       const { data } = res
  //       setDataItems(data), setLoading(false)
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         // The request was made and the server responded with a status code
  //         // that falls out of the range of 2xx
  //         console.log(error.response.data)
  //         console.log(error.response.status)
  //         console.log(error.response.headers)
  //       } else if (error.request) {
  //         // The request was made but no response was received
  //         // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
  //         // http.ClientRequest in node.js
  //         console.log(error.request)
  //       } else {
  //         // Something happened in setting up the request that triggered an Error
  //         console.log('Error', error.message)
  //       }
  //       console.log(error.config)
  //     })
  // }, [])

  const coursesStarted = cardData.filter((card) => card.progress !== 0)
  const suggestedCourses = cardData.filter((card) => card.progress === 0)

  // if (loading) return <h3>Loading...</h3>

  return (
    <Box sx={mainContainer}>
      <Box sx={titleContainer}>
        <Typography sx={feedTitle} variant="h5" noWrap>
          Continue Learning...
        </Typography>
      </Box>
      <Box sx={feedContainer}>
        {coursesStarted.map((card: CardType) => (
          <Card key={card.id} cardItem={card} />
        ))}
      </Box>

      <Box sx={feedContainer}>
        <Box sx={titleContainer}>
          <Typography sx={feedTitle} variant="h5" noWrap>
            You might also like
          </Typography>
        </Box>
        <Box sx={feedContainer}>
          {suggestedCourses.map((card: CardType) => (
            <Card key={card.id} cardItem={card} />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

const mainContainer = {
  border: '2px solid #000',
  margin: '5px auto',
  padding: 5,
  width: '80%',
}

const titleContainer = {
  margin: '0 10px',
}

const feedTitle = {
  lineHeight: 3,
}

const feedContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  marginBottom: 7,
}
