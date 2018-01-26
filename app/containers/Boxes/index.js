import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Box from '../../components/Box';
import { rotateColor } from './reducer';

const mapStateToProps = state => ({
  Boxes: state.Boxes,
  rows: state.form.rows,
  columns: state.form.columns,
});

const mapDispatchToProps = dispatch => ({
  onClick: (i, value) => {
    dispatch(rotateColor(i, value));
  },
});

class Boxes extends PureComponent {
  render() {
    const {
      Boxes,
      rows,
      columns,
      onClick
    } = this.props;
    const width = (100 / (columns || 1)).toString().concat('%');
    const height = (100 / (rows || 1)).toString().concat('%');
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
        {Boxes.map((block, index) =>
          (<Box
            width={width}
            height={height}
            block={block}
            backgroundColor={getColor(block)}
            key={index.toString()}
            index={index}
            onClick={onClick}
          />),
        )}
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Boxes);

// style.propTypes = {
//   Boxes: PropTypes.arrayOf(React.PropTypes.number).isRequired,
//   rows: PropTypes.string.isRequired,
//   columns: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };
