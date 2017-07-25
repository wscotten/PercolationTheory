const UPDATE_ROWS_INPUT = 'UPDATE_ROWS_INPUT';

export const receiveInput = text => ({
  type: UPDATE_ROWS_INPUT,
  text,
});

export default function ColumnsInput(RowsInput, { type, text }) {
  switch (type) {
    case UPDATE_ROWS_INPUT:
      return text;
    default:
      return RowsInput;
  }
}
