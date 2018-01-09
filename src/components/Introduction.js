import React from 'react';
import { Container, Box, Heading, Text } from 'rebass';

const Introduction = () => (
  <Container>
    <Box py={4}>
      <Heading color={'blue4'} mb={3} children={'About'} />

      <Text color={'blue4'}>
        This is a numerical snapshot of what is happening in the United States'
        most (in)famous jail today. All statistics are calculated from a dataset
        provided by the New York City Department of Corrections. It's available
        through{' '}
        <a href="https://data.cityofnewyork.us/Public-Safety/Daily-Inmates-In-Custody/7479-ugqb">
          NYC Open Data
        </a>{' '}
        and updates daily.
        <br />
        <br />
        The meaning of designations used in the dataset is unclear in a few
        cases. I've made my best educated guesses to interpret them. Explanatory
        notes are forthcoming.
      </Text>
    </Box>
  </Container>
);

export default Introduction;
