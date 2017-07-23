import { connect } from 'react-redux';
import style from './style';

const mapStateToProps = ({ Boxes }) => ({
  Boxes,
});

const ProbabilityInput = connect(
  mapStateToProps,
  null,
)(style);

export default ProbabilityInput;
