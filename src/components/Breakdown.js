import React from 'react'
import { Flex, Panel, PanelHeader, Text, Box, Subhead } from 'rebass'
import { VictoryContainer, VictoryPie, VictoryTheme } from 'victory'

const Breakdown = props => {

  let min = props.data.filter(inmate => inmate.custody_level === 'MIN').length
  let med = props.data.filter(inmate => inmate.custody_level === 'MED').length
  let max = props.data.filter(inmate => inmate.custody_level === 'MAX').length
  console.log({min, med, max})

  return(
    <div>

      <Flex
      >

        <Box
          w={[1, 1/3]}
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
          <Subhead
            color='blue4'
            ml={2}
          >
            {props.under16}
          </Subhead>
        </Box>

        <Box
          w={[1, 1/3]}
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
        <Box
          w={[1, 1/3]}
          my={3}
          mx={3}
          pr={3}
        >
          <PanelHeader
            color='blue4'
            f={4}
            >
            Custody Level
          </PanelHeader>
          <VictoryPie
            innerRadius={50}
            data={[
              { x: 'Min '+ min, y: min },
              { x: 'Med', y: med },
              { x: 'Max', y: max }
            ]}
          />
        </Box>
          
    
    
      </Flex>

    </div>
  ) 
}

export default Breakdown