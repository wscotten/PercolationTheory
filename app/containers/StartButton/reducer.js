import {
  START_BUTTON_RUNNING_COLOR,
  START_BUTTON_STOPPED_COLOR,
} from '../../constants';

const START_BUTTON_CLICKED = 'START_BUTTON_CLICKED';
const CLEAR_ARRAY = 'CLEAR_ARRAY';

export const startButtonClicked = () => ({
  type: START_BUTTON_CLICKED,
});

export default function StartButtonColor(
  color,
  { type },
  { ProbabilityInput, RefreshInput },
) {
  switch (type) {
    case START_BUTTON_CLICKED:
      if (color === START_BUTTON_RUNNING_COLOR) {
        return START_BUTTON_STOPPED_COLOR;
      } else if (ProbabilityInput !== '' && RefreshInput !== '') {
        return START_BUTTON_RUNNING_COLOR;
      }
      return START_BUTTON_STOPPED_COLOR;
    case CLEAR_ARRAY:
      return START_BUTTON_STOPPED_COLOR;
    default:
      return color;
  }
}
