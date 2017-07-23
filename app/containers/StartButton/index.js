import { connect } from 'react-redux';
import style from './style';
import { startButtonClicked } from './reducer';

const mapStateToProps = ({ StartButtonColor }) => ({
  StartButtonColor,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onStartClick: () => {
      dispatch(startButtonClicked());
    },
  };
};

const StartContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(style);

export default StartContainer;
