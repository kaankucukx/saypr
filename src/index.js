import React from 'react';
import { render } from 'react-dom';
import './assets/index.scss';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production' ? compose(applyMiddleware(...middlewares), window.__REDUX_DEVTOOLS_EXTENSION__()) : applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
