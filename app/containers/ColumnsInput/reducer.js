import { UPDATE_GRID_COLUMNS, GRID_COLUMNS } from '/app/constants';

const UPDATE_COLUMNS_INPUT = 'UPDATE_COLUMNS_INPUT';

export const receiveInput = text => ({
  type: UPDATE_COLUMNS_INPUT,
  text,
});

const ColumnsInput = (ColumnsInput = GRID_COLUMNS, { type, text }) => {
  switch (type) {
    case UPDATE_GRID_COLUMNS:
      return text;
    default:
      return ColumnsInput;
  }
};

export default ColumnsInput;
