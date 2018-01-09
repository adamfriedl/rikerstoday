import React from 'react';
import { Flex } from 'rebass';
import PieChart from './PieChart';
import TextStat from './TextStat';

const Breakdown = props => {
  // const calculateStay = () => {
  //   let today = new Date()
  //   let admitDate = .admitted_dt
  //   console.log(today, admitDate)
  // }

  // Below are the calculations on the fetched data set

  // Total population calculation
  let total = props.data.length;

  // Custody Level calculations
  let min = props.data.filter(inmate => inmate.custody_level === 'MIN').length;
  let med = props.data.filter(inmate => inmate.custody_level === 'MED').length;
  let max = props.data.filter(inmate => inmate.custody_level === 'MAX').length;
  let custodyChartData = [
    { x: 'Min \n' + Math.round(min / total * 100) + '%', y: min },
    { x: 'Med \n' + Math.round(med / total * 100) + '%', y: med },
    { x: 'Max \n' + Math.round(max / total * 100) + '%', y: max }
  ];

  // Race calculations
  let black = props.data.filter(inmate => inmate.race === 'B').length;
  let white = props.data.filter(inmate => inmate.race === 'W').length;
  let asian = props.data.filter(inmate => inmate.race === 'A').length;
  let hispanic = props.data.filter(inmate => inmate.race === 'O').length;
  // let other = props.data.filter(inmate => inmate.race !== 'B' || 'W' || 'A' || 'O').length
  let raceChartData = [
    { x: 'Black \n' + Math.round(black / total * 100) + '%', y: black },
    { x: 'Asian \n' + Math.round(asian / total * 100) + '%', y: asian },
    {
      x: 'Hispanic \n' + Math.round(hispanic / total * 100) + '%',
      y: hispanic
    },
    { x: 'White \n' + Math.round(white / total * 100) + '%', y: white }
  ];

  // Age calculations
  let to21 = props.data.filter(inmate => inmate.age <= 21).length;
  let to40 = props.data.filter(inmate => inmate.age > 21 && inmate.age <= 40)
    .length;
  let over40 = props.data.filter(inmate => inmate.age > 40).length;
  let ageChartData = [
    { x: 'Under 22 \n' + Math.round(to21 / total * 100) + '%', y: to21 },
    { x: '22 to 40 \n' + Math.round(to40 / total * 100) + '%', y: to40 },
    { x: 'Over 40 \n' + Math.round(over40 / total * 100) + '%', y: over40 }
  ];

  // Gender calculations
  let female = props.data.filter(inmate => inmate.gender === 'F').length;
  let femalePercent = Math.round(female / total * 100) + '%';

  // Under mental health observation calculations
  let mentalHealth = props.data.filter(inmate => inmate.bradh === 'Y').length;
  let mentalHealthPercent = Math.round(mentalHealth / total * 100) + '%';

  // Gang affiliation calculations
  let gangAffiliation = props.data.filter(inmate => inmate.srg_flg === 'Y')
    .length;
  let gangAffiliationPercent = Math.round(gangAffiliation / total * 100) + '%';

  return (
    <div>
      <Flex wrap>
        <PieChart title={'Race'} chartData={raceChartData} />

        <PieChart title={'Custody Level'} chartData={custodyChartData} />

        <PieChart title={'Age'} chartData={ageChartData} />

        <TextStat title={'Female'} stat={femalePercent} />

        <TextStat title={'Mental Health'} stat={mentalHealthPercent} />

        <TextStat title={'Gang Affiliation'} stat={gangAffiliationPercent} />
      </Flex>
    </div>
  );
};

export default Breakdown;
