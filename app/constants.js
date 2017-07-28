export const GRID_COLUMNS = '10';
export const GRID_ROWS = '10';
export const INITIAL_PROBABILITY_INPUT = '.5';
export const INITIAL_REFRESH_INPUT = '.016';
export const INITIAL_RECOVERY_INPUT = '.5';
export const INITIAL_ARRAY = Array(
  Number(GRID_COLUMNS) * Number(GRID_ROWS),
).fill(0);
INITIAL_ARRAY[((GRID_COLUMNS * GRID_ROWS) / 2) - (GRID_COLUMNS / 2)] = -1;
export const START_BUTTON_RUNNING_COLOR = '#4484CE';
export const START_BUTTON_STOPPED_COLOR = 'red';
export const START_BUTTON_CLICKED = 'START_BUTTON_CLICKED';
export const CLEAR_ARRAY = 'CLEAR_ARRAY';
export const SWAP_START_BUTTON_COLOR = 'SWAP_START_BUTTON_COLOR';
export const SIMULATION_FINISHED = 'SIMULATION_FINISHED';
export const START_SIMULATION = 'START_SIMULATION';
export const CHANGE_ARRAY_COLORS = 'CHANGE_ARRAY_COLORS';
export const UPDATE_ROWS_INPUT = 'UPDATE_ROWS_INPUT';
export const UPDATE_COLUMNS_INPUT = 'UPDATE_COLUMNS_INPUT';
export const UPDATE_GRID_COLUMNS = 'UPDATE_GRID_COLUMNS';
export const UPDATE_GRID_ROWS = 'UPDATE_GRID_ROWS';
export const ROTATE_COLOR_TRUE = 'ROTATE_COLOR_TRUE';
export const ROTATE_COLOR = 'ROTATE_COLOR';
