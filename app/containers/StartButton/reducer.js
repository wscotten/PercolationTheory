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
      if (ProbabilityInput !== '' && RefreshInput !== '' && color !== '#4484CE') {
        return '#4484CE';
      }
      return 'red';
    case CLEAR_ARRAY:
      return 'red';
    default:
      return color;
  }
}
