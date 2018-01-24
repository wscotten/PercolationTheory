import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';

export default function style({ Boxes, rows, columns, onClick }) {
  const widthPercentage = (100 / (columns | 1)).toString().concat('%');
  const heightPercentage = (100 / (rows | 1)).toString().concat('%');
  const getColor = (number) => {
    switch (number) {
      case -4:
        return 'gray';
      case -3:
        return 'blue';
      case -2:
      case -1:
        return 'red';
      default:
        return 'green';
    }
  };
  return (
    <View
      style={{
        width: '100%',
        height: '70%',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}
    >
      {Boxes.map((block, i) =>
        (<TouchableOpacity
          style={{
            width: widthPercentage,
            height: heightPercentage,
            borderWidth: 1,
            backgroundColor: getColor(block),
          }}
          key={i.toString()}
          onPress={() => onClick(i, block)}
        />),
      )}
    </View>
  );
}

// style.propTypes = {
//   Boxes: PropTypes.arrayOf(React.PropTypes.number).isRequired,
//   rows: PropTypes.string.isRequired,
//   columns: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
