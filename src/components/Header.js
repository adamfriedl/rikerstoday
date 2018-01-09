import React from 'react';
import { Sticky, Text } from 'rebass';

const Header = () => (
  <Sticky
    p={1}
    // my={2}
    top
    left
    color={'blue4'}
    bg={'white'}
  >
    <Text
      style={{ display: 'inline' }}
      mr={4}
      f={[2, 3]}
      children={'Rikers Today'}
    />
  </Sticky>
);

export default Header;
