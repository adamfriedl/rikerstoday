import React from 'react'
import { Flex, Panel, PanelHeader, PanelFooter, Text, Box, Subhead } from 'rebass'
import { VictoryChart, VictoryContainer, VictoryPie, VictoryTheme, VictoryTransition, VictoryLabel, VictoryTooltip } from 'victory'

const Breakdown = props => {

  let total = props.data.length

  let min = props.data.filter(inmate => inmate.custody_level === 'MIN').length
  let med = props.data.filter(inmate => inmate.custody_level === 'MED').length
  let max = props.data.filter(inmate => inmate.custody_level === 'MAX').length
  console.log({min, med, max})

  const colors = [
    'gray',
    'blue',
    'indigo',
    'violet'
  ]

  return(
    <div>

      <Flex wrap>
        <Box
          width={[1, 1/2, 1/3]}
          my={3}
          // mx={3}
          pr={3}
        >
          <PanelHeader
            color='white'
            bg='blue'
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
          w={[1, 1/2, 1/3]}
          my={3}
          // mx={3}
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
          w={[1, 1/2, 1/3]}
          my={2}
          pr={4}
        >
          <PanelHeader
            color='gray8'
            f={4}
            mb={-3}
            >
            Custody Level
          </PanelHeader>                        
            <VictoryPie
              data={[
                { x: 'Min \n' + Math.round(min/total*100) + '%', y: min },
                { x: 'Med \n' + Math.round(med/total*100) + '%', y: med },
                { x: 'Max \n' + Math.round(max/total*100) + '%', y: max }
              ]}       
              innerRadius={60} 
              labelRadius={85}
              style={{ labels: { fontFamily: '"Playfair Display", serif', fontSize: 20, fill: "white" }}}
              colorScale={colors}       
            />
        </Box>
      
        </Flex>

    </div>
  ) 
}

export default Breakdown