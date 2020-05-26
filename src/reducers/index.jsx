import { combineReducers } from 'redux';
import { FormReducer } from './form-state.reducer';
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  FormReducer,
})

export default createRootReducer
