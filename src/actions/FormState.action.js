export const FormStateActionTypes = {
  SET_FORM_STATE: '[FormState] Set FormState',
};

export const FormStateActionCreator = (data) => ({
  type: FormStateActionTypes.SET_FORM_STATE,
  data,
});
