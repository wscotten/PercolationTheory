import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { store } from '/App';
import StartButton from '/app/containers/StartButton';
import {
  START_BUTTON_RUNNING_COLOR,
  START_BUTTON_STOPPED_COLOR,
  INITIAL_STATE,
  SWAP_START_BUTTON_COLOR,
} from '/app/constants';
import reducer from '../reducer';

it('renders without crashing', () => {
  const rendered = renderer.create(
    <Provider store={store}>
      <StartButton />
    </Provider>,
  ).toJSON();
  expect(rendered).toBeTruthy();
});

describe('StartButton', () => {
  it('Should change to blue', () => {
    expect(reducer(
      START_BUTTON_STOPPED_COLOR,
      { type: SWAP_START_BUTTON_COLOR },
    )).toEqual(START_BUTTON_RUNNING_COLOR);
  });

  it('Should change to red', () => {
    expect(reducer(
      START_BUTTON_RUNNING_COLOR,
      { type: SWAP_START_BUTTON_COLOR },
    )).toEqual(START_BUTTON_STOPPED_COLOR);
  });
});

// describe('should stay red', () => {
//   it('is clicked with no inputs', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: START_BUTTON_CLICKED },
//       INITIAL_STATE,
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
//   it('receives CLEAR_ARRAY action', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: CLEAR_ARRAY },
//       {
//         ProbabilityInput: '1',
//         RefreshInput: '1',
//         RecoveryInput: '1',
//         RowsInput: '10',
//         ColumnsInput: '10',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
//   it('has 1 input valid', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: START_BUTTON_CLICKED },
//       {
//         ProbabilityInput: '1',
//         RefreshInput: '',
//         RecoveryInput: '',
//         RowsInput: '',
//         ColumnsInput: '',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
//   it('has 2 inputs valid', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: START_BUTTON_CLICKED },
//       {
//         ProbabilityInput: '1',
//         RefreshInput: '1',
//         RecoveryInput: '',
//         RowsInput: '',
//         ColumnsInput: '',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
//   it('has 3 inputs valid', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: START_BUTTON_CLICKED },
//       {
//         ProbabilityInput: '1',
//         RefreshInput: '1',
//         RecoveryInput: '1',
//         RowsInput: '',
//         ColumnsInput: '',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
//   it('has 4 inputs valid', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: START_BUTTON_CLICKED },
//       {
//         ProbabilityInput: '1',
//         RefreshInput: '1',
//         RecoveryInput: '1',
//         RowsInput: '10',
//         ColumnsInput: '',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
// });

// describe('should turn blue', () => {
//   it('has 5 inputs valid', () => {
//     expect(reducer(
//       START_BUTTON_STOPPED_COLOR,
//       { type: START_BUTTON_CLICKED },
//       {
//         ProbabilityInput: '.5',
//         RefreshInput: '.1',
//         RecoveryInput: '.5',
//         RowsInput: '50',
//         ColumnsInput: '50',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_RUNNING_COLOR);
//   });
// });

// describe('should turn red', () => {
//   it('has 5 inputs valid and running', () => {
//     expect(reducer(
//       START_BUTTON_RUNNING_COLOR,
//       { type: START_BUTTON_CLICKED },
//       {
//         ProbabilityInput: '1',
//         RefreshInput: '1',
//         RecoveryInput: '1',
//         RowsInput: '10',
//         ColumnsInput: '10',
//         StartButtonColor: START_BUTTON_STOPPED_COLOR,
//         Boxes: INITIAL_ARRAY,
//       },
//     )).toEqual(START_BUTTON_STOPPED_COLOR);
//   });
// });
