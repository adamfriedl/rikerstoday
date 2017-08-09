import React, { Component } from 'react'
import { Flex, Box, Banner, Text, Heading } from 'rebass'
import rikersIsland from '../assets/images/rikersIsland.jpg'

const HeroImage = (props) => 

  <div>
    <Banner
      color='blue4'
      // bg='green4'
      // backgroundImage={rikersIsland}
    >
      <Heading
        f={[ 4, 5 ]}
        children='In NYC DOC Custody Today:'
      />
    <Heading
        f={9}
        children={props.data.length}
      />
    </Banner>

  </div>

export default HeroImage