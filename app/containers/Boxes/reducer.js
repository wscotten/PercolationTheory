import { store } from '../../../App';
const CHANGE_ARRAY_COLORS = 'CHANGE_ARRAY_COLORS';
const START_BUTTON_CLICKED = 'START_BUTTON_CLICKED';
const CLEAR_ARRAY = 'CLEAR_ARRAY';

const updateBoxes = Boxes =>
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
  // Boxes.indexOf(0) !== -1
  while (counter < 100) {
    counter++;
    Boxes = Boxes.map((box, i) => {
      if (box !== 0) return box;
      if(i % 20 === 0) { // LEFT
        const surroundingBoxes = [
          i - 20,
          i - 19,
          i + 1,
          i + 20,
          i + 21,
        ];
        return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
      } else if ((i + 1) % 20 === 0) { // RIGHT
        const surroundingBoxes = [
          i - 21,
          i - 20,
          i - 1,
          i + 19,
          i + 20,
        ];
        return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
      }
      const surroundingBoxes = [
        i - 21,
        i - 20,
        i - 19,
        i - 1,
        i + 1,
        i + 19,
        i + 20,
        i + 21,
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
  const initialArray = Array(640).fill(0);
  initialArray[310] = 1;
  switch (type) {
    case START_BUTTON_CLICKED:
      if (
        ProbabilityInput !== '' &&
        RefreshInput !== '' &&
        StartButtonColor !== 'green'
      ) {
        return createSetTimeoutArray(Boxes, ProbabilityInput, RefreshInput);
      }
      return Boxes;
    case CHANGE_ARRAY_COLORS:
      return updateBoxes(Boxes);
    case CLEAR_ARRAY:
      return [...initialArray];
    default:
      return Boxes;
  }
}
