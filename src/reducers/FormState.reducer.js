import { produce } from 'immer';
import { FormStateActionTypes } from '../actions/FormState.action';
import { FormModel } from '../modules/form/constants';

export const initialState = {
  Form: new FormModel(),
  isFormFetching: false,
  isFormFetched: true,
};

export const FormReducer = (
  state = initialState,
  action,
) => produce(state, (draft) => {
  switch (action.type) {
    case FormStateActionTypes.SET_FORM_STATE:
      draft.isFormFetched = action.isFormFetched;
      break;
    default:
      return state;
  }
});
