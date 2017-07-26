import {
  START_BUTTON_RUNNING_COLOR,
  START_SIMULATION,
  UPDATE_COLUMNS_INPUT,
  UPDATE_ROWS_INPUT,
} from '/app/constants';

const CHANGE_ARRAY_COLORS = 'CHANGE_ARRAY_COLORS';
const CLEAR_ARRAY = 'CLEAR_ARRAY';
const ROTATE_COLOR = 'ROTATE_COLOR';

export const rotateColor = (i, value) => ({
  type: ROTATE_COLOR,
  i,
  value,
});

const createSetTimeoutArray = (Boxes, ProbabilityInput, ColumnsInput) => {
  const ColumnsNumber = Number(ColumnsInput);
  const checkSurroundingBoxes = (Boxes, box, i, counter, surroundingBoxes) => {
    const flaggedSurroundingBoxes = surroundingBoxes.filter(box =>
      Boxes[box] !== undefined && (Boxes[box] === -1 || Boxes[box] > 0),
    );
    for (let i = 0; i < flaggedSurroundingBoxes.length; i += 1) {
      if (Math.random() < ProbabilityInput) {
        return counter;
      }
    }
    return box;
  };
  let counter = 0;
  while (Boxes.indexOf(0) !== -1) {
    console.log(1);
    counter += 1;
    Boxes = Boxes.map((box, i) => {
      if (box !== 0) return box;
      if (i % ColumnsNumber === 0) { // LEFT
        const surroundingBoxes = [
          i - ColumnsNumber,
          i - (ColumnsNumber - 1),
          i + 1,
          i + ColumnsNumber,
          i + (ColumnsNumber + 1),
        ];
        return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
      } else if ((i + 1) % ColumnsNumber === 0) { // RIGHT
        const surroundingBoxes = [
          i - (ColumnsNumber + 1),
          i - ColumnsNumber,
          i - 1,
          i + (ColumnsNumber - 1),
          i + ColumnsNumber,
        ];
        return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
      }
      const surroundingBoxes = [
        i - (ColumnsNumber + 1),
        i - ColumnsNumber,
        i - (ColumnsNumber - 1),
        i - 1,
        i + 1,
        i + (ColumnsNumber - 1),
        i + ColumnsNumber,
        i + (ColumnsNumber + 1),
      ];
      return checkSurroundingBoxes(Boxes, box, i, counter, surroundingBoxes);
    });
  }
  return Boxes;
};

export default function Boxes(
  Boxes,
  { type, i, value },
  {
    ProbabilityInput,
    RecoveryInput,
    StartButtonColor,
    RowsInput,
    ColumnsInput,
  },
) {
  switch (type) {
    case UPDATE_ROWS_INPUT:
    case UPDATE_COLUMNS_INPUT:
    case CLEAR_ARRAY:
      return Array(RowsInput * ColumnsInput).fill(0);
    case START_SIMULATION:
      return createSetTimeoutArray(Boxes, ProbabilityInput, ColumnsInput);
    case CHANGE_ARRAY_COLORS:
      return Boxes.map((box) => {
        switch (true) {
          case (box === -2):
          case (box > 0):
            return box - 1;
          case (box === 0):
            if (Math.random() < RecoveryInput) {
              return -2;
            }
            return box - 1;
          default:
            return box;
        }
      });
    case ROTATE_COLOR:
      if (StartButtonColor !== START_BUTTON_RUNNING_COLOR) {
        return Boxes.map((box, index) => {
          if (index === i) {
            if (value === -4) {
              return 0;
            } else if (value === -1) {
              return -4;
            }
            return -1;
          }
          return box;
        });
      }
      return Boxes;
    default:
      return Boxes;
  }
}
