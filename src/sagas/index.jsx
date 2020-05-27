import { FormStateActionTypes, UpdateFormStateActionCreator } from '../actions/form-state.actions'
import { put, select, takeLatest } from 'redux-saga/effects'
import { ApplicationStateActionTypes } from '../actions/application-state.actions'

function * updateApplicationState ({ data, navigateTo }) {
  try {
    yield put(UpdateFormStateActionCreator(data))
    const formState = yield select(state => state.FormReducer.Form)
    yield window.localStorage.setItem('sayprForm', JSON.stringify(formState))
    yield navigateTo // I drop a comment on GitHub which i am facing with a weird bug when using connected-react-routers push() method. So this is not a good solution but works for now. Follow my comment. https://github.com/supasate/connected-react-router/issues/230#issuecomment-634203877
  } catch (err) {
    alert(err)
  }
}

function * normalizeApplicationState () {
  try {
    const formState = yield select(state => state.FormReducer.Form)
    if (!formState) {
      const storedFormState = yield window.localStorage.getItem('sayprForm')
      yield put(UpdateFormStateActionCreator(JSON.parse(storedFormState)))
    }
  } catch (err) {
    console.log(err)
  }
}

export default function * rootSaga () {
  yield takeLatest(FormStateActionTypes.UPDATE_APPLICATION_STATE, updateApplicationState)
  yield takeLatest(ApplicationStateActionTypes.NORMALIZE_APP_STATE, normalizeApplicationState)
}
