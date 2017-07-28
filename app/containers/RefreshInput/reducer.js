const UPDATE_REFRESH_INPUT = 'UPDATE_REFRESH_INPUT';

export const receiveInput = text => ({
  type: UPDATE_REFRESH_INPUT,
  text,
});

const RefreshInput = (RefreshInput = '.017', { type, text }) => {
  switch (type) {
    case UPDATE_REFRESH_INPUT:
      return text;
    default:
      return RefreshInput;
  }
};

export default RefreshInput;
