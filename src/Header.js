import React from 'react'
import { Sticky, Text } from 'rebass'

const Header = () =>

  <Sticky 
    p={3} 
    my={1} 
    top left
    color={'white'}
    bg={'blue4'}
  >
    <Text
      f={4}
      children='Rikers Numbers Today'
    />
  </Sticky>

  export default Header