import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

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
    maxLength={3}
    onChangeText={text => onChangeText(text)}
  />
);

style.propTypes = {
  onChangeText: PropTypes.func.isRequired,
};

export default style;
