import React from 'react'
import { Sticky, Flex, Box, Text, NavLink } from 'rebass'

const Header = () =>

  <Sticky 
    p={1} 
    // my={2} 
    top left
    color={'blue4'}    
    bg={'white'}
  >

    <Text
      style={{display: 'inline'}}
      mr={4}
      f={[2, 3]}
      children={'Rikers Today'}
    />
  
    <NavLink          
      href={'#'}
      children='About'
    />

  </Sticky>

  export default Header