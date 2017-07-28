import { combineReducers } from 'redux';
import ProbabilityInput from '/app/containers/ProbabilityInput/reducer';
import RefreshInput from '/app/containers/RefreshInput/reducer';
import RecoveryInput from '/app/containers/RecoveryInput/reducer';
import RowsInput from '/app/containers/RowsInput/reducer';
import ColumnsInput from '/app/containers/ColumnsInput/reducer';
import StartButtonColor from '/app/containers/StartButton/reducer';
import Boxes from '/app/containers/Boxes/reducer';

export default combineReducers({
  ProbabilityInput,
  RefreshInput,
  RecoveryInput,
  RowsInput,
  ColumnsInput,
  StartButtonColor,
  Boxes,
});
