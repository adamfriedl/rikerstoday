import React from 'react';
import { PanelHeader, Box } from 'rebass';
import { VictoryPie } from 'victory';

const PieChart = ({ title = 'Title', chartData = '#' }) => {
  const colors = ['#da864a', '#cc5500', '#a04300', '#5e2700'];

  return (
    <Box w={[1, 1 / 2, 1 / 3]} my={2} pr={4}>
      <PanelHeader color="blue4" f={4} mb={-3}>
        {title}
      </PanelHeader>
      <VictoryPie
        data={chartData}
        innerRadius={25}
        labelRadius={50}
        style={{
          labels: {
            fontFamily: '"Comfortaa", serif',
            fontSize: 17,
            fill: 'white'
          }
        }}
        colorScale={colors}
      />
    </Box>
  );
};

export default PieChart;
