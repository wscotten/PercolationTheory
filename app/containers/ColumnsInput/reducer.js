const UPDATE_COLUMNS_INPUT = 'UPDATE_COLUMNS_INPUT';

export const receiveInput = text => ({
  type: UPDATE_COLUMNS_INPUT,
  text,
});

export default function ColumnsInput(ColumnsInput, { type, text }) {
  switch (type) {
    case UPDATE_COLUMNS_INPUT:
      return text;
    default:
      return ColumnsInput;
  }
}
