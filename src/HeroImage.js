import React, { Component } from 'react'
import { Banner, Heading } from 'rebass'
import rikersIsland from './assets/images/rikersIsland.jpg'

const HeroImage = (props) => 

  <div>
    <Banner
      color='white'
      bg='gray8'
      // backgroundImage={rikersIsland}
      >
      <Heading
        f={[ 4, 5, 6, 7 ]}>
        Rikers Numbers Today<br />
        {props.totalCount}
      </Heading>
    </Banner>    
  </div>

export default HeroImage