import { UPDATE_GRID_ROWS } from '/app/constants';

const UPDATE_ROWS_INPUT = 'UPDATE_ROWS_INPUT';

export const receiveInput = text => ({
  type: UPDATE_ROWS_INPUT,
  text,
});

const RowsInput = (RowsInput = '50', { type, text }) => {
  switch (type) {
    case UPDATE_GRID_ROWS:
      return text;
    default:
      return RowsInput;
  }
};

export default RowsInput;
