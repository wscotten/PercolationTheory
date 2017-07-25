import React from 'react';
import { View } from 'react-native';

import TextContainer from './components/TextContainer';
import ProbabilityContainer from './components/ProbabilityContainer';
import ProbabilityText from './components/ProbabilityText';
import ProbabilityInput from './containers/ProbabilityInput';
import RefreshContainer from './components/RefreshContainer';
import RefreshText from './components/RefreshText';
import RefreshInput from './containers/RefreshInput';
import RecoveryContainer from './components/RecoveryContainer';
import RecoveryText from './components/RecoveryText';
import RecoveryInput from './containers/RecoveryInput';
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
        <RecoveryContainer>
          <RecoveryText>Recovery</RecoveryText>
          <RecoveryText>(0 - 1)</RecoveryText>
          <RecoveryInput />
        </RecoveryContainer>
        <StartButton />
      </TextContainer>
      <GridBoxes />
    </View>
  );
}
