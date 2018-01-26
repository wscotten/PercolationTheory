const initialForm = {
  probability: '.5',
  refresh: '.1',
  recovery: '.5',
  rows: '50',
  columns: '50',
};

export const FORM_CHANGE = 'FORM_CHANGE';

export const onChange = ({ text, name }) => ({
  type: FORM_CHANGE,
  text,
  name,
});

export default (
  form = initialForm,
  { type, text, name },
) => {
  switch (type) {
    case FORM_CHANGE:
      return {
        ...form,
        [name]: text,
      };
    default:
      return form;
  }
};
