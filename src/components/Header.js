import React from 'react'
import { Sticky, Text, NavLink } from 'rebass'

const Header = () =>

  <Sticky 
    p={1} 
    // my={2} 
    top left
    color={'blue4'}    
    bg={'white'}
  >
    <Text
      f={[2, 3]}
      children={'Rikers Today'}
    />
      
      <NavLink
        style={{textAlign: 'right'}}
        href={'#'}
        children='About'
      />

  </Sticky>

  export default Header