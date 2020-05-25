import { produce } from 'immer';
import { FormStateActionTypes } from '../actions/FormState.action';

export const initialState = {
  Form: null,
  isFormFetching: false,
  isFormFetched: true,
};

export const FormReducer = (
  state = initialState,
  action
) =>
  produce(state = initialState, (draft) => {
    switch (action.type) {
      case FormStateActionTypes.SET_FORM_STATE:
        draft.isFormFetched = action.isFormFetched;
        break;
      default:
        return state;
    }
  });
