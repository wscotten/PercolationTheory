import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { GRID_WIDTH, GRID_HEIGHT } from '../../constants';

const blockDivs = (Boxes, onClick, widthPercentage, heightPercentage) =>
  Boxes.map((block, i) => {
    switch (block) {
      case -2:
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
      case -3:
        return (
          <TouchableOpacity
            style={{
              width: widthPercentage,
              height: heightPercentage,
              borderWidth: 0.5,
              backgroundColor: 'blue',
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

export default function style({ Boxes, RowsInput, ColumnsInput, onClick }) {
  console.log(Boxes.length);
  const widthPercentage = ((1 / ColumnsInput) * 99.99).toString().concat('%');
  const heightPercentage = ((1 / RowsInput) * 55).toString().concat('%');
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {blockDivs(Boxes, onClick, widthPercentage, heightPercentage)}
    </View>
  );
}

style.propTypes = {
  Boxes: PropTypes.arrayOf(React.PropTypes.number).isRequired,
  RowsInput: PropTypes.string.isRequired,
  ColumnsInput: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
