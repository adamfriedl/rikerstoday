import React from 'react';
import { Flex, Box, Banner, Text, Heading } from 'rebass';
import grid from '../assets/icons/grid.svg';

const HeroImage = props => (
  <div>
    <Banner color="white" backgroundImage="https://i.imgur.com/JwMci8U.jpg">
      <Flex wrap>
        <Box w={[1, 1 / 2]}>
          <Heading f={9}>
            {props.loading ? <img src={grid} /> : props.data.length}
          </Heading>
        </Box>

        <Box w={[1, 1 / 2]}>
          <Text
            mt={3}
            f={[3, 4]}
            children="persons are in NYC DOC custody today"
          />
        </Box>
      </Flex>
    </Banner>
  </div>
);

export default HeroImage;
