import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { INITIAL_PROBABILITY_INPUT } from '/app/constants';

const style = ({ onChangeText }) => (
  <TextInput
    style={{
      marginTop: 5,
      backgroundColor: 'white',
      width: '80%',
      height: 20,
      marginLeft: '10%',
    }}
    keyboardType={'numeric'}
    maxLength={4}
    defaultValue={INITIAL_PROBABILITY_INPUT}
    onChangeText={text => onChangeText(text)}
  />
);

style.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default style;
