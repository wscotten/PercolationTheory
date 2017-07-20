import React from 'react';
import { View } from 'react-native';

import TextContainer from './TextContainer';

import ProbabilityContainer from './ProbabilityContainer';
import ProbabilityInput from './ProbabilityInput';
import ProbabilityText from './ProbabilityText';

import RefreshContainer from './RefreshContainer';
import RefreshInput from './RefreshInput';
import RefreshText from './RefreshText';

import StartContainer from './StartContainer';
import StartText from './StartText';

import GridContainer from './GridContainer';
import GridBoxes from './GridBoxes';

export default function index() {
  return (
    <View>
      <TextContainer>
        <ProbabilityContainer>
          <ProbabilityInput />
          <ProbabilityText>Probability</ProbabilityText>
          <ProbabilityText>(0 - 1)</ProbabilityText>
        </ProbabilityContainer>
        <RefreshContainer>
          <RefreshInput />
          <RefreshText>Refresh</RefreshText>
          <RefreshText>(0 - 1)</RefreshText>
        </RefreshContainer>
        <StartContainer>
          <StartText>Start</StartText>
          <StartText>Simulation</StartText>
        </StartContainer>
      </TextContainer>
      <GridContainer>
        <GridBoxes />
      </GridContainer>
    </View>
  );
}
