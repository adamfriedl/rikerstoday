import React from 'react'
import { Sticky, Text } from 'rebass'

const Header = () =>

  <Sticky 
    p={3} 
    // my={2} 
    top left
    color={'green4'}
    bg={'blue4'}
  >
    <Text
      f={4}
      children='RIKERS TODAY'
      style={{fontFamily: "Frijole"}}
    />
  </Sticky>

  export default Header