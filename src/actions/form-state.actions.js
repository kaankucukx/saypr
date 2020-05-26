export const FormStateActionTypes = {
  UPDATE_APPLICATION_STATE: '[FormState] Update Application',
  SET_FORM_STATE: '[FormState] Set FormState',
};

export const UpdateApplicationActionCreator = (data, navigateTo) => ({
  type: FormStateActionTypes.UPDATE_APPLICATION_STATE,
  data,
  navigateTo,
});

export const UpdateFormStateActionCreator = (data) => ({
  type: FormStateActionTypes.SET_FORM_STATE,
  data,
});
