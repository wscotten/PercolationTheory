import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

const blockDivs = (Boxes, onClick, widthPercentage, heightPercentage) =>
  Boxes.map((block, i) => {
    switch (block) {
      case -4:
        return (
          <View
            style={{
              width: widthPercentage,
              height: heightPercentage,
              borderWidth: 0.5,
              backgroundColor: 'gray',
            }}
            key={i.toString()}
          />
        );
      case -3:
        return (
          <View
            style={{
              width: widthPercentage,
              height: heightPercentage,
              borderWidth: 0.5,
              backgroundColor: 'blue',
            }}
            key={i.toString()}
          />
        );
      case -2:
      case -1:
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
      default:
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
    }
  });

export default function style({ Boxes, RowsInput, ColumnsInput, onClick }) {
  const widthPercentage = ((1 / ColumnsInput) * 99.99).toString().concat('%');
  const heightPercentage = ((1 / RowsInput) * 55).toString().concat('%');
  return (
    <View
      onStartShouldSetResponder={evt => true }
      onResponderMove={(evt) => {
        console.log(evt.nativeEvent.target);
        onClick(evt.nativeEvent.target - 50, 0);
      }}
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
