import {
  START_BUTTON_RUNNING_COLOR,
  START_BUTTON_CLICKED,
  SWAP_START_BUTTON_COLOR,
  CLEAR_ARRAY,
  START_SIMULATION,
  CHANGE_ARRAY_COLORS,
  UPDATE_GRID_ROWS,
  UPDATE_GRID_COLUMNS,
  UPDATE_ROWS_INPUT,
  UPDATE_COLUMNS_INPUT,
 } from '/app/constants';

export const startButtonMiddleware = store => next => (action) => {
  const {
    StartButtonColor,
    ProbabilityInput,
    RefreshInput,
    RecoveryInput,
    RowsInput,
    ColumnsInput,
    Boxes,
  } = store.getState();
  const Probability = parseFloat(ProbabilityInput);
  const Refresh = parseFloat(RefreshInput);
  const Recovery = parseFloat(RecoveryInput);
  const Rows = Number(RowsInput);
  const Columns = Number(ColumnsInput);
  switch (action.type) {
    case START_BUTTON_CLICKED:
      if (StartButtonColor === START_BUTTON_RUNNING_COLOR) {
        store.dispatch({ type: CLEAR_ARRAY });
        store.dispatch({ type: SWAP_START_BUTTON_COLOR });
        return next(action);
      } else if (
        Probability > 0 && Probability <= 1 &&
        Refresh > 0 && Refresh <= 1 &&
        Recovery > 0 && Recovery <= 1 &&
        Rows > 0 && Rows <= 20 && Number.isInteger(Rows) &&
        Columns > 0 && Columns <= 20 && Number.isInteger(Columns) &&
        (Math.max(...Boxes) === 1)
      ) {
        store.dispatch({ type: SWAP_START_BUTTON_COLOR });
        store.dispatch({ type: START_SIMULATION });
        return next(action);
      }
      return next(action);
    case CLEAR_ARRAY:
      store.dispatch({ type: SWAP_START_BUTTON_COLOR });
      return next(action);
    default:
      return next(action);
  }
};

export const boxesMiddleware = store => next => (action) => {
  const {
    RefreshInput,
    Boxes,
  } = store.getState();
  switch (action.type) {
    case START_SIMULATION:
      setTimeout(() => {
        store.dispatch({ type: CHANGE_ARRAY_COLORS });
      }, RefreshInput * 1000);
      return next(action);
    case CHANGE_ARRAY_COLORS:
      if (Math.max(...Boxes) === 1) {
        store.dispatch({ type: CLEAR_ARRAY });
      } else {
        setTimeout(() => {
          store.dispatch({ type: CHANGE_ARRAY_COLORS });
        }, RefreshInput * 1000);
      }
      return next(action);
    default:
      return next(action);
  }
};

export const rowsAndColumnsMiddleware = store => next => (action) => {
  const {
    RowsInput,
    ColumnsInput,
  } = store.getState();
  console.log(action.text);
  switch (action.type) {
    case UPDATE_COLUMNS_INPUT:
      if (
        action.text !== '' &&
        Number.isInteger(Number(action.text)) &&
        Number(action.text) > 0 &&
        Number(action.text) <= 20
      ) {
        store.dispatch({
          type: UPDATE_GRID_COLUMNS,
          text: action.text,
        });
      }
      return next(action);
    case UPDATE_ROWS_INPUT:
      if (
        action.text !== '' &&
        Number.isInteger(Number(action.text)) &&
        Number(action.text) > 0 &&
        Number(action.text) <= 20
      ) {
        store.dispatch({
          type: UPDATE_GRID_ROWS,
          text: action.text,
        });
      }
      return next(action);
    default:
      return next(action);
  }
};
