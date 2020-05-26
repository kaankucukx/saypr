import { produce } from 'immer';
import { FormStateActionTypes } from '../actions/form-state.actions';

export const initialState = {
  Form: null,
  isFormFetching: false,
  isFormFetched: true,
};

export const FormReducer = (
  state = initialState,
  action,
) => produce(state, (draft) => {
  switch (action.type) {
    case FormStateActionTypes.SET_FORM_STATE:
      draft.Form = { ...draft.Form, ...action.data };
      break;
    default:
      return state;
  }
});
