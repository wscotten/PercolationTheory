import {
  START_BUTTON_RUNNING_COLOR,
  START_BUTTON_STOPPED_COLOR,
  SWAP_START_BUTTON_COLOR,
} from '../../constants';

export const START_BUTTON_CLICKED = 'START_BUTTON_CLICKED';
export const CLEAR_ARRAY = 'CLEAR_ARRAY';

export const startButtonClicked = () => ({
  type: START_BUTTON_CLICKED,
});

export default function StartButtonColor(color, { type }) {
  switch (type) {
    case SWAP_START_BUTTON_COLOR:
      return color === START_BUTTON_RUNNING_COLOR
      ? START_BUTTON_STOPPED_COLOR
      : START_BUTTON_RUNNING_COLOR;
    default:
      return color;
  }
}
