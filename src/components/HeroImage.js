import React, { Component } from 'react'
import { Flex, Box, Banner, Text, Heading } from 'rebass'
import rikersIsland from '../assets/images/rikersIsland.jpg'
import grid from '../assets/icons/grid.svg'

const HeroImage = (props) => 

  <div>
    <Banner
      color='blue4'
      // bg='green4'
      // backgroundImage={rikersIsland}
    >
      <Heading
        f={[ 4, 5 ]}
        children='In NYC DOC Custody:'
      />
      <Heading
          f={9}
          children={props.data.length}
      >
        {props.loading ?
          <img src={grid} /> :
          props.data.length
        }
      </Heading>
    </Banner>

  </div>

export default HeroImage