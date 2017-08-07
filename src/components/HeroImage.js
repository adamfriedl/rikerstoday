import React, { Component } from 'react'
import { Banner, Text, Heading } from 'rebass'
import rikersIsland from '../assets/images/rikersIsland.jpg'

const HeroImage = (props) => 

  <Banner
    color='white'
    bg='gray8'
    // backgroundImage={rikersIsland}
    >
    <Text 
      children='Persons in NYC Department of Corrections custody today'
    />
    <Heading
      f={[ 4, 5, 6, 7 ]}>
      {props.totalCount}
    </Heading>
  </Banner>   

export default HeroImage