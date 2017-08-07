import React, { Component } from 'react'
import { Flex, Box, Banner, Text, Heading } from 'rebass'
import rikersIsland from '../assets/images/rikersIsland.jpg'

const HeroImage = (props) => 

  <div>
    <Flex>
      <Box
        w={[
          1, 
          1/2
        ]}
      >
        <Banner
          color='white'
          bg='gray1'
          // backgroundImage={rikersIsland}
        >
          <Heading
            f={[ 6, 7 ]}
            children='In NYC DOC Custody Today:'
          />
        </Banner>
      </Box>
      <Box
        w={[1, 1/2]}
      >
        <Banner
          color='white'
          bg='gray1'
          // backgroundImage={rikersIsland}
        >
          <Heading
            f={[ 6, 7 ]}
            children={props.totalCount}
          />
        </Banner>
      </Box>
    </Flex>

  </div>

export default HeroImage