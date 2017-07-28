const UPDATE_RECOVERY_INPUT = 'UPDATE_RECOVERY_INPUT';

export const receiveInput = text => ({
  type: UPDATE_RECOVERY_INPUT,
  text,
});

const RecoveryInput = (RecoveryInput = '.5', { type, text }) => {
  switch (type) {
    case UPDATE_RECOVERY_INPUT:
      return text;
    default:
      return RecoveryInput;
  }
};

export default RecoveryInput;
