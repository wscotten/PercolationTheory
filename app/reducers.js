import ProbabilityInput from './containers/ProbabilityInput/reducer';
import RefreshInput from './containers/RefreshInput/reducer';
import StartButtonColor from './containers/StartButton/reducer';
import Boxes from './containers/Boxes/reducer';

const initialArray = Array(640).fill(0);
initialArray[310] = 1;

const initialState = {
  ProbabilityInput: '',
  RefreshInput: '',
  StartButtonColor: 'red',
  Boxes: initialArray,
};


export default function (state = initialState, action) {
  return {
    ProbabilityInput: ProbabilityInput(state.ProbabilityInput, action),
    RefreshInput: RefreshInput(state.RefreshInput, action),
    StartButtonColor: StartButtonColor(state.StartButtonColor, action, state),
    Boxes: Boxes(state.Boxes, action, state),
  };
}
