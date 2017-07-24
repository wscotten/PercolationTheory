import { connect } from 'react-redux';
import style from './style';
import { rotateColor } from './reducer';

const mapStateToProps = ({ Boxes }) => ({
  Boxes,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (i, value) => {
      dispatch(rotateColor(i, value));
    },
  };
};

const Boxes = connect(
  mapStateToProps,
  mapDispatchToProps,
)(style);

export default Boxes;
