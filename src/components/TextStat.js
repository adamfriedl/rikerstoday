import React from 'react'
import { Box, PanelHeader, Text } from 'rebass'

const TextStat = ({
  title = "Title",
  stat = '#'
  
}) =>

  <Box
    w={[1, 1/2, 1/3]}
    my={2}
    pr={4}
  >

    <PanelHeader
      color='blue4'
      f={4}
      mb={-3}
      children={title}
    />
    
    <Text
      color='blue4'
      f={7}
      mt={4}
      center
      children={stat}
    />

  </Box>

export default TextStat