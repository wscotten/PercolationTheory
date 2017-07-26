import ProbabilityInput from '/app/containers/ProbabilityInput/reducer';
import RefreshInput from '/app/containers/RefreshInput/reducer';
import RecoveryInput from '/app/containers/RecoveryInput/reducer';
import RowsInput from '/app/containers/RowsInput/reducer';
import ColumnsInput from '/app/containers/ColumnsInput/reducer';
import StartButtonColor from '/app/containers/StartButton/reducer';
import Boxes from '/app/containers/Boxes/reducer';
import { INITIAL_STATE } from '/app/constants';


export default function rootReducer(state = INITIAL_STATE, action) {
  return {
    ProbabilityInput: ProbabilityInput(state.ProbabilityInput, action),
    RefreshInput: RefreshInput(state.RefreshInput, action),
    RecoveryInput: RecoveryInput(state.RecoveryInput, action),
    RowsInput: RowsInput(state.RowsInput, action),
    ColumnsInput: ColumnsInput(state.ColumnsInput, action),
    StartButtonColor: StartButtonColor(state.StartButtonColor, action),
    Boxes: Boxes(state.Boxes, action, state),
  };
}
