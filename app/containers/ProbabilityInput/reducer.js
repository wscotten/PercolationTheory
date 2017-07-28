const UPDATE_PROBABILITY_INPUT = 'UPDATE_PROBABILITY_INPUT';

export const receiveInput = text => ({
  type: UPDATE_PROBABILITY_INPUT,
  text,
});

const ProbabilityInput = (ProbabilityInput = '.5', { type, text }) => {
  switch (type) {
    case UPDATE_PROBABILITY_INPUT:
      return text;
    default:
      return ProbabilityInput;
  }
};

export default ProbabilityInput;
