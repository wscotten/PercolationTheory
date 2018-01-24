import { combineReducers } from 'redux';
import { reducer as form } from './redux';
import StartButtonColor from '/app/containers/StartButton/reducer';
import Boxes from '/app/containers/Boxes/reducer';

export default combineReducers({
  form,
  StartButtonColor,
  Boxes,
});
