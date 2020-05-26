import { FormStateActionTypes, UpdateFormStateActionCreator } from '../actions/form-state.actions';
import { put, select, takeLatest } from 'redux-saga/effects';
import { ApplicationStateActionTypes } from '../actions/application-state.actions';

function * updateApplicationState ({ data, navigateTo }) {
  try {
    yield put(UpdateFormStateActionCreator(data));
    const formState = yield select(state => state.FormReducer.Form);
    yield window.localStorage.setItem('sayprForm', JSON.stringify(formState));
    yield navigateTo;
  } catch (err) {
    alert(err);
  }
}

function * normalizeApplicationState () {
  try {
    const formState = yield select(state => state.FormReducer.Form);
    if (!formState) {
      const storedFormState = yield window.localStorage.getItem('sayprForm');
      yield put(UpdateFormStateActionCreator(JSON.parse(storedFormState)));
    }
  } catch (err) {
    console.log(err);
  }
}

export default function * rootSaga () {
  yield takeLatest(FormStateActionTypes.UPDATE_APPLICATION_STATE, updateApplicationState);
  yield takeLatest(ApplicationStateActionTypes.NORMALIZE_APP_STATE, normalizeApplicationState);
}
