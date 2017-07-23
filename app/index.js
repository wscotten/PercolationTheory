import React from 'react';
import { View } from 'react-native';

import TextContainer from './components/TextContainer';
import ProbabilityContainer from './components/ProbabilityContainer';
import ProbabilityText from './components/ProbabilityText';
import ProbabilityInput from './containers/ProbabilityInput';
import RefreshContainer from './components/RefreshContainer';
import RefreshText from './components/RefreshText';
import RefreshInput from './containers/RefreshInput';
import StartButton from './containers/StartButton';
import GridBoxes from './containers/Boxes';

export default function index() {
  return (
    <View>
      <TextContainer>
        <ProbabilityContainer>
          <ProbabilityText>Probability</ProbabilityText>
          <ProbabilityText>(0 - 1)</ProbabilityText>
          <ProbabilityInput />
        </ProbabilityContainer>
        <RefreshContainer>
          <RefreshText>Refresh</RefreshText>
          <RefreshText>(0 - 1)</RefreshText>
          <RefreshInput />
        </RefreshContainer>
        <StartButton />
      </TextContainer>
      <GridBoxes />
    </View>
  );
}
