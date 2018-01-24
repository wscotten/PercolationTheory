import { connect } from 'react-redux';
import style from './style';
import { rotateColor } from './reducer';

const mapStateToProps = (state) => ({
  Boxes: state.Boxes,
  rows: state.form.rows,
  columns: state.form.columns,
});

const mapDispatchToProps = dispatch => ({
  onClick: (i, value) => {
    dispatch(rotateColor(i, value));
  },
});

const Boxes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(style);

export default Boxes;
