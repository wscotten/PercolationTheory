import { connect } from 'react-redux';
import style from './style';
import { receiveInput } from './reducer';

const mapDispatchToProps = dispatch => {
  return {
    onChangeText: (text) => {
      dispatch(receiveInput(text));
    },
  };
};

const RowsInput = connect(
  null,
  mapDispatchToProps,
)(style);

export default RowsInput;
