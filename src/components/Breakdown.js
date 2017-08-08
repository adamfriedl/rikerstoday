import React from 'react'
import { Flex, Panel, PanelHeader, Text, Box } from 'rebass'


const Breakdown = props => 

  <div>

    <Flex>

      <Box
        w={1/3}
        my={3}
        mx={3}
        pr={3}
      >
        <PanelHeader
          color='blue4'
          f={4}
          >
          Under 18
        </PanelHeader>
        <Text
          color='blue4'
          ml={2}
          f={3}
        >
          {props.under16}
        </Text>
      </Box>

      <Box
        w={1/3}
        my={3}
        mx={3}
        pr={3}
      >
        <PanelHeader
          color='blue4'
          f={4}
          >
          Mental Health Observation
        </PanelHeader>
        <Text
          color='blue4'
          ml={2}
          f={3}
        >
          {props.mho}
        </Text>
      </Box>
   
   
   
    </Flex>

  </div>

export default Breakdown