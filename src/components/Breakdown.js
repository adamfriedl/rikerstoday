import React from 'react'
import { Flex, Panel, PanelHeader, PanelFooter, Box, Subhead, Donut } from 'rebass'


const Breakdown = props => 

  <div>

    <Flex column
      w={1/3}
    >
      <Panel 
        color='blue4'
        my={2}  
      >
        <PanelHeader
          color='white'
          bg='blue4'>
          Under 18 - {props.under16}
        </PanelHeader>
        <Box p={3}>
          <Donut
            value={props.under16 / props.totalCount}
            strokeWidth={3}
            size={256}
            color='blue'
          />
        </Box>
        <PanelFooter color='blue4'>
          Footer
        </PanelFooter>
      </Panel>
    </Flex>

  </div>

export default Breakdown