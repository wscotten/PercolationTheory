import { store } from '/App';
import StartButton from '/app';

import {
  START_BUTTON_RUNNING_COLOR,
  START_BUTTON_STOPPED_COLOR,
  INITIAL_ARRAY,
  START_BUTTON_CLICKED,
} from '/app/constants';

import middleware from '/app/middleware';

describe('should turn red', () => {
  it('has 5 inputs valid and running', () => {
    expect(middleware(
      START_BUTTON_RUNNING_COLOR,
      { type: START_BUTTON_CLICKED },
      {
        ProbabilityInput: '1',
        RefreshInput: '1',
        RecoveryInput: '1',
        RowsInput: '10',
        ColumnsInput: '10',
        StartButtonColor: START_BUTTON_STOPPED_COLOR,
        Boxes: INITIAL_ARRAY,
      },
    )).toEqual(START_BUTTON_STOPPED_COLOR);
  });
});
