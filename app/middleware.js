import { START_BUTTON_RUNNING_COLOR } from '/app/constants';

const startButtonMiddleware = store => next => (action) => {
  const {
    StartButtonColor,
    ProbabilityInput,
    RefreshInput,
    RecoveryInput,
    RowsInput,
    ColumnsInput,
  } = store.getState();
  switch (action.type) {
    case 'START_BUTTON_CLICKED':
      if (StartButtonColor === START_BUTTON_RUNNING_COLOR) {
        store.dispatch({ type: 'CLEAR_ARRAY' });
        store.dispatch({ type: 'SWAP_START_BUTTON_COLOR' });
        return next(action);
      } else if (
        ProbabilityInput !== '' &&
        RefreshInput !== '' &&
        RecoveryInput !== '' &&
        RowsInput !== '' &&
        ColumnsInput !== ''
      ) {
        store.dispatch({ type: 'SWAP_START_BUTTON_COLOR' });
        store.dispatch({ type: 'START_SIMULATION' });
        return next(action);
      }
      return next(action);
    case 'SIMULATION_FINISHED':
      store.dispatch({ type: 'SWAP_START_BUTTON_COLOR' });
      return next(action);
    default:
      return next(action);
  }
};

export default startButtonMiddleware;
