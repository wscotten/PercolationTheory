import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Keyboard } from 'react-native';
import StartText from '../../components/StartText';

const style = ({ StartButtonColor, onStartClick }) => (
  <TouchableOpacity
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: StartButtonColor,
      borderWidth: 2,
      borderColor: '#c3d7df',
    }}
    onPress={() => {
      Keyboard.dismiss();
      onStartClick();
    }}
  >
    <StartText>Start</StartText>
  </TouchableOpacity>
);

style.propTypes = {
  StartButtonColor: PropTypes.string.isRequired,
  onStartClick: PropTypes.func.isRequired,
};

export default style;
