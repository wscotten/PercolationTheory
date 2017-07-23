const UPDATE_PROBABILITY_INPUT = 'UPDATE_PROBABILITY_INPUT';

export const receiveInput = text => ({
  type: UPDATE_PROBABILITY_INPUT,
  text,
});

export default function ProbabilityInput(ProbabilityInput, { type, text }) {
  switch (type) {
    case UPDATE_PROBABILITY_INPUT:
      return text;
    default:
      return ProbabilityInput;
  }
}
