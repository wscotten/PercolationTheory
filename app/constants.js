export const GRID_WIDTH = 10;
export const GRID_HEIGHT = 15;
export const INITIAL_ARRAY = Array(GRID_WIDTH * GRID_HEIGHT).fill(0);
export const START_BUTTON_RUNNING_COLOR = '#4484CE';
export const START_BUTTON_STOPPED_COLOR = 'red';
export const INITIAL_STATE = {
  ProbabilityInput: '',
  RefreshInput: '',
  RecoveryInput: '',
  RowsInput: '15',
  ColumnsInput: '10',
  StartButtonColor: START_BUTTON_STOPPED_COLOR,
  Boxes: INITIAL_ARRAY,
};
export const START_BUTTON_CLICKED = 'START_BUTTON_CLICKED';
export const CLEAR_ARRAY = 'CLEAR_ARRAY';
export const SWAP_START_BUTTON_COLOR = 'SWAP_START_BUTTON_COLOR';
export const SIMULATION_FINISHED = 'SIMULATION_FINISHED';
export const START_SIMULATION = 'START_SIMULATION';
export const CHANGE_ARRAY_COLORS = 'CHANGE_ARRAY_COLORS';
