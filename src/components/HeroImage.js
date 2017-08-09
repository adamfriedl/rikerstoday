import React, { Component } from 'react'
import { Flex, Box, Banner, Text, Heading } from 'rebass'
import rikersCell from '../assets/images/rikersCell.jpg'
import grid from '../assets/icons/grid.svg'

const HeroImage = (props) => 

  <div>
    <Banner
      color='white'
      // bg='green4'
      backgroundImage={rikersCell}
    >
      <Flex wrap>
        
        <Box
          w={[1, 1/2]}
        >
          <Heading
              f={9}
          >
            {props.loading ?
              <img src={grid} /> :
              props.data.length
            }
          </Heading>
        </Box>

        <Box
          w={[1, 1/2]}
        >
          <Text
            mt={3}
            f={[3, 4]}
            children='persons are in NYC DOC custody'
          />
        </Box>
        
      </Flex>

    </Banner>

  </div>

export default HeroImage