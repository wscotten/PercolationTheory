import { store } from '../../../App';

const CHANGE_ARRAY_COLORS = 'CHANGE_ARRAY_COLORS';
const START_BUTTON_CLICKED = 'START_BUTTON_CLICKED';
const CLEAR_ARRAY = 'CLEAR_ARRAY';
const GRID_WIDTH = 20;
const GRID_HEIGHT = 32;

const changeArrayColors = Boxes =>
  Boxes.map((box) => {
    if (box > 1) {
      return box - 1;
    }
    return box;
  });

const createSetTimeoutArray = (Boxes, ProbabilityInput, RefreshInput) => {
  const checkSurroundingBoxes = (Boxes, box, i, counter, surroundingBoxes) => {
    const flaggedSurroundingBoxes = surroundingBoxes.filter((box) => {
      return Boxes[box] !== undefined && Boxes[box] !== 0;
    });
    for (let i = 0; i < flaggedSurroundingBoxes.length; i++) {
      if (Math.random() < ProbabilityInput) {
        return counter;
      }
    }
    return box;
  };
  let counter = 0;
  while (Boxes.indexOf(0) !== -1) {
    counter++;
    Boxes = Boxes.map((box, i) => {
      if (box !== 0) return box;
      if(i % GRID_WIDTH === 0) { // LEFT
        const surroundingBoxes = [
          i - GRID_WIDTH,
          i - GRID_WIDTH - 1,
          i + 1,
          i + GRID_WIDTH,
          i + GRID_WIDTH + 1,
        ];
        return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
      } else if ((i + 1) % 20 === 0) { // RIGHT
        const surroundingBoxes = [
          (i - GRID_WIDTH) + 1,
          i - GRID_WIDTH,
          i - 1,
          (i + GRID_WIDTH) - 1,
          i + GRID_WIDTH,
        ];
        return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
      }
      const surroundingBoxes = [
        (i - GRID_WIDTH) + 1,
        i - GRID_WIDTH,
        i - GRID_WIDTH - 1,
        i - 1,
        i + 1,
        (i + GRID_WIDTH) - 1,
        i + GRID_WIDTH,
        i + GRID_WIDTH + 1,
      ];
      return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
    });
  }
  const temp = setInterval(() => {
    store.dispatch({ type: CHANGE_ARRAY_COLORS });
  }, RefreshInput * 1000);
  setTimeout(() => {
    clearInterval(temp);
    store.dispatch({ type: CLEAR_ARRAY });
  }, (Math.max(...Boxes) * RefreshInput * 1000) + 5000);
  return Boxes;
};

export default function Boxes(
  Boxes,
  { type },
  { ProbabilityInput, RefreshInput, StartButtonColor },
) {
  const initialArray = Array(GRID_WIDTH * GRID_HEIGHT).fill(0);
  initialArray[310] = 1;
  switch (type) {
    case START_BUTTON_CLICKED:
      if (
        ProbabilityInput !== '' &&
        RefreshInput !== '' &&
        StartButtonColor !== '#c3d7df'
      ) {
        return createSetTimeoutArray(Boxes, ProbabilityInput, RefreshInput);
      }
      return Boxes;
    case CHANGE_ARRAY_COLORS:
      return changeArrayColors(Boxes);
    case CLEAR_ARRAY:
      return [...initialArray];
    default:
      return Boxes;
  }
}
