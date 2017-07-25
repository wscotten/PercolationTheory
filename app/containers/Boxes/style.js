import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { GRID_WIDTH, GRID_HEIGHT } from '../../constants';

const widthPercentage = ((1 / GRID_WIDTH) * 100).toString().concat('%');
const heightPercentage = (55 / GRID_HEIGHT).toString().concat('%');

import { Dimensions } from 'react-native';
import Reactotron from 'reactotron-react-native';
var {height, width} = Dimensions.get('window');
Reactotron.log(width);
Reactotron.log(height);

const blockDivs = (Boxes, onClick) =>
  Boxes.map((block, i) => {
    switch (block) {
      case 1:
        return (
          <TouchableOpacity
            style={{
              width: widthPercentage,
              height: heightPercentage,
              borderWidth: 0.5,
              backgroundColor: 'red',
            }}
            key={i.toString()}
            onPress={() => onClick(i, block)}
          />
        );
      case -1:
        return (
          <TouchableOpacity
            style={{
              width: widthPercentage,
              height: heightPercentage,
              borderWidth: 0.5,
              backgroundColor: 'gray',
            }}
            key={i.toString()}
            onPress={() => onClick(i, block)}
          />
        );
      default:
        return (
          <TouchableOpacity
            style={{
              width: widthPercentage,
              height: heightPercentage,
              borderWidth: 0.5,
              backgroundColor: 'green',
            }}
            key={i.toString()}
            onPress={() => onClick(i, block)}
          />
        );
    }
  });

export default function style({ Boxes, onClick }) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {blockDivs(Boxes, onClick)}
    </View>
  );
}

style.propTypes = {
  Boxes: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  onClick: PropTypes.func.isRequired,
};
