import {
  START_SIMULATION,
  CHANGE_ARRAY_COLORS,
  CLEAR_ARRAY,
  ROTATE_COLOR_TRUE,
  INITIAL_ARRAY,
  UPDATE_GRID_COLUMNS,
  UPDATE_GRID_ROWS,
} from '/app/constants';

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
  Boxes = INITIAL_ARRAY,
  {
    type,
    i,
    value,
    text,
    ProbabilityInput,
    RecoveryInput,
    RowsInput,
    ColumnsInput,
  },
) {
  switch (type) {
    case UPDATE_GRID_COLUMNS:
      return Array(Number(RowsInput) * Number(text)).fill(0);
    case UPDATE_GRID_ROWS:
      return Array(Number(text) * Number(ColumnsInput)).fill(0);
    case CLEAR_ARRAY:
      return Array(Number(RowsInput) * Number(ColumnsInput)).fill(0);
      // return INITIAL_ARRAY;
    case START_SIMULATION:
      return createSetTimeoutArray(Boxes, ProbabilityInput, ColumnsInput);
    case CHANGE_ARRAY_COLORS:
      if (!(Math.max(...Boxes) === 0 && Math.min(...Boxes) === 0)) {
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
      }
      return Boxes;
    case ROTATE_COLOR_TRUE:
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
    default:
      return Boxes;
  }
}
