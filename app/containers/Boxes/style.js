import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { GRID_WIDTH, GRID_HEIGHT } from '../../constants';

const widthPercentage = ((1 / GRID_WIDTH) * 100).toString().concat('%');
const heightPercentage = ((1 / GRID_HEIGHT) * 100).toString().concat('%');

const blockDivs = Boxes =>
  Boxes.map((block, i) => {
    if (block === 1) {
      return (
        <View
          style={{
            width: widthPercentage,
            height: heightPercentage,
            borderWidth: 0.5,
            backgroundColor: 'red',
          }}
          key={i.toString()}
        />
      );
    }
    return (
      <View
        style={{
          width: widthPercentage,
          height: heightPercentage,
          borderWidth: 0.5,
          backgroundColor: 'green',
        }}
        key={i.toString()}
      />
    );
  });

export default function style({ Boxes }) {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {blockDivs(Boxes)}
    </View>
  );
}

style.propTypes = {
  Boxes: PropTypes.arrayOf(React.PropTypes.number).isRequired,
};
