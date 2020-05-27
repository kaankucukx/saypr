import { produce } from 'immer'
import { FormStateActionTypes } from '../actions/form-state.actions'

export const initialState = {
  Form: null,
  isFormFetching: false,
  isFormFetched: true,
  heading: 'Just one more step'
}

export const FormReducer = (
  state = initialState,
  action
) => produce(state, (draft) => {
  switch (action.type) {
    case FormStateActionTypes.SET_FORM_STATE:
      draft.Form = { ...draft.Form, ...action.data }
      break
    case FormStateActionTypes.UPDATE_APP_HEADING:
      draft.heading = action.data
      break
    default:
      return state
  }
})
