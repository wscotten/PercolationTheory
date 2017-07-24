import ProbabilityInput from './containers/ProbabilityInput/reducer';
import RefreshInput from './containers/RefreshInput/reducer';
import StartButtonColor from './containers/StartButton/reducer';
import Boxes from './containers/Boxes/reducer';
import { INITIAL_ARRAY } from './constants';


const initialState = {
  ProbabilityInput: '',
  RefreshInput: '',
  StartButtonColor: 'red',
  Boxes: INITIAL_ARRAY,
};


export default function (state = initialState, action) {
  return {
    ProbabilityInput: ProbabilityInput(state.ProbabilityInput, action),
    RefreshInput: RefreshInput(state.RefreshInput, action),
    StartButtonColor: StartButtonColor(state.StartButtonColor, action, state),
    Boxes: Boxes(state.Boxes, action, state),
  };
}
