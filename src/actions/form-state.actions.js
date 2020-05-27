export const FormStateActionTypes = {
  UPDATE_APPLICATION_STATE: '[FormState] Update Application',
  SET_FORM_STATE: '[FormState] Set FormState',
  UPDATE_APP_HEADING: '[FormState] Set App Heading'
}

export const UpdateApplicationActionCreator = (data, navigateTo) => ({
  type: FormStateActionTypes.UPDATE_APPLICATION_STATE,
  data,
  navigateTo
})

export const UpdateFormStateActionCreator = (data) => ({
  type: FormStateActionTypes.SET_FORM_STATE,
  data
})

export const UpdateHeading = (data) => ({
  type: FormStateActionTypes.UPDATE_APP_HEADING,
  data
})
